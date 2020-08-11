import GenericService from "./GenericService";
class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => 
  
  new Promise((resolve,reject)=>{

    this.post("products", data).then(()=>{

resolve();

    }).catch((err) => {
      reject(err.response.data);

    });})

    



  
  
  
  
  
  
  
  
  deleteProduct = (_id) => new Promise((resolve,reject)=>{

    this.delete("products/" + _id).then(()=>{

resolve();

    }).catch((err) => {
      reject(err.response.data);

    });})











  updateProduct = (_id, data) => this.put("products/" + _id, data);
  getProducts = () => this.get("products");
  getSingleProduct = (id) => this.get("products/" + id);
}

let productService = new ProductsService();
export default productService;
