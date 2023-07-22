import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: null,
  imageURL: null,
  description: null,
  price: null,
}
export const selectSlice = createSlice({
  name: 'select',
  initialState: initialState,
  reducers: { 
    addToSelect: (state, action) => {
      state.title = action.payload.title;
      state.imageURL = action.payload.imageURL;
      state.description = "Не следует, однако забывать, что консультация с широким активом позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Товарищи! консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Равным образом консультация с широким активом способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач."
      state.price = action.payload.price;
    },
  },
})

export const { addToSelect } = selectSlice.actions

export default selectSlice.reducer 