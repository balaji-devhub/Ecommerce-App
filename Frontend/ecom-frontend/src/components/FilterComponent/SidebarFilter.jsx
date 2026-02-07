import { FilterBox, FilterTitle, FilterItem, Overlay } from './Filter'

const SidebarFilter = ({ open, setOpen }) => {
  return (
    <>
      <Overlay open={open} onClick={() => setOpen(false)} />

      <FilterBox open={open}>
        <FilterTitle>Filters</FilterTitle>

        <FilterItem>
          <input type="checkbox" /> Electronics
        </FilterItem>
        <FilterItem>
          <input type="checkbox" /> Fashion
        </FilterItem>
        <FilterItem>
          <input type="checkbox" /> Home
        </FilterItem>

        <hr />

        <FilterTitle>Price</FilterTitle>
        <FilterItem>
          <input type="radio" name="price" /> Under ₹1000
        </FilterItem>
        <FilterItem>
          <input type="radio" name="price" /> ₹1000 - ₹5000
        </FilterItem>
      </FilterBox>
    </>
  )
}

export default SidebarFilter
