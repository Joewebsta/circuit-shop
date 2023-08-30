import AddForm from "./AddForm";

const Modal = () => {
  return (
    <AddForm
      onDisplayNewProductForm={onDisplayNewProductForm}
      onHideNewProductForm={onHideNewProductForm}
      onAddNewProduct={onAddNewProduct}
      isAddFormVisible={isAddFormVisible}
    />
  );
};
