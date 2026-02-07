import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter the Username']
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (value) {
          return /^\S+@\S+\.\S+$/.test(value)
        },
        message: 'Invalid email format'
      }
    },
    password: {
      type: String,
      required: [true, 'Enter the Password'],
      trim: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('User', UserSchema)
