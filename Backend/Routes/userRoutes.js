import express, { response } from 'express'
import User from '../Model/UserModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import UserPrevent from '../Middleware/UserPrevent.js'
import Product from '../Model/ProductModel.js'
import Cart from '../Model/CartModel.js'
dotenv.config()
const router = express.Router()

// login User 
router.post('/login/', async (request, response) => {
  try {
    const { email, password } = request.body

    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      return response.status(401).json({
        message: 'Invalid email or password'
      })
    }

    const passwordCheck = await bcrypt.compare(password, existingUser.password)

    if (!passwordCheck) {
      return response.status(401).json({
        message: 'Invalid email or password'
      })
    }

    const userPayload = {
      userId: existingUser._id,
      email
    }

    //generate token
    const jwt_token = jwt.sign(userPayload, process.env.JWT_TOKEN)

    response.status(200).json({
      message: 'User login successfully',
      jwt_token
    })
  } catch (error) {
    response.status(500).json({
      message: 'Server error',
      error: error.message
    })
  }
})

// add new user
router.post('/new-user/', async (request, response) => {
  const user = request.body
  const exisitingUser = await User.findOne({ email: user.email })

  if (exisitingUser) {
    return response.status(409).json({
      message: 'User already exists'
    })
  }

  const hashedPassword = await bcrypt.hash(user.password, 12)

  await User.create({
    email: user.email,
    name: user.name,
    phone: user.phone,
    password: hashedPassword
  })

  response.status(200).json({
    message: 'User Created Successfully',
    userName: user.name,
    userEmail: user.email
  })
})

// all products for user
router.get("/products-all/", UserPrevent, async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json({
      success: true,
      product_count: products.length,
      products
    });

  } catch (error) {
    console.error("Fetch Products Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch products"
    });
  }
});


// get Specific Product Details for detail product page 

router.get("/products/:id/", UserPrevent, async (req, res) => {
  try {
    const { id } = req.params
    const products = await Product.findById({ _id: id });

    return res.status(200).json({
      success: true,
      products
    });

  } catch (error) {
    console.error("Fetch Products Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch products"
    });
  }
});

router.post('/cart/add/', UserPrevent, async (request, response) => {
  try {
    const { id } = request.body
    const userId = request.user.email

    const check_user = await User.findOne({ email: userId })

    if (!check_user) {
      return response.json({
        message: 'Un Authorized User',
        status: false
      })
    }

    const product = await Product.findById(id)

    if (!product) {
      return response.json({
        message: 'Product Not found',
        status: false
      })
    }

    let cart = await Cart.findOne({ userId })

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [
          {
            productId: id,
            quantity: 1
          }
        ]
      })
    } else {
      const itemIndex = cart.items.findIndex(
        item => item.productId.toString() === id
      )

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += 1
      } else {
        cart.items.push({
          productId: id,
          quantity: 1
        })
      }

      await cart.save()
    }

    const cartData = await Cart.findOne({ userId })
      .populate('items.productId')

    return response.json({
      message: 'Product added Successfully',
      status: true,
      cart: cartData
    })
  } catch (error) {
    console.log(error)
    return response.status(500).json({
      message: 'Server Error'
    })
  }
})

router.get('/cart', UserPrevent, async (req, res) => {
  try {
    const userId = req.user.email

    const cart = await Cart.findOne({ userId })
      .populate({
        path: 'items.productId',
        select: 'name price image_link category rating'
      })

    if (!cart) {
      return res.json({
        status: true,
        cart: { items: [] }
      })
    }

    return res.json({
      status: true,
      cart
    })
  } catch (error) {
    console.error('Get Cart Error:', error)

    return res.status(500).json({
      status: false,
      message: 'Server error'
    })
  }
})


router.delete('/cart/:id', UserPrevent, async (req, res) => {
  try {
    const userId = req.user.email
    const { id } = req.params

    const cart = await Cart.findOne({ userId })

    if (!cart) {
      return res.json({
        message: 'Cart not found',
        status: false
      })
    }

    cart.items = cart.items.filter(
      item => item.productId.toString() !== id
    )

    await cart.save()

    return res.json({
      message: 'Item removed from cart',
      status: true,
      cart
    })
  } catch (error) {
    console.error('Cart Delete Error:', error)

    return res.status(500).json({
      status: false,
      message: 'Server error'
    })
  }
})

router.put('/cart/update/:id', UserPrevent, async (req, res) => {
  try {
    const userId = req.user.email
    const { id } = req.params
    const { quantity } = req.body

    const cart = await Cart.findOne({ userId })

    if (!cart) {
      return res.json({
        status: false,
        message: 'Cart not found'
      })
    }

    const item = cart.items.find(
      item => item.productId.toString() === id
    )

    if (!item) {
      return res.json({
        status: false,
        message: 'Item not found'
      })
    }

    item.quantity = quantity

    await cart.save()

    res.json({
      status: true,
      cart
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: false })
  }
})

export default router
