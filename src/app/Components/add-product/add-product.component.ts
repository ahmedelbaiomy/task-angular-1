import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  name:string ='';
  description: string='';
  price: number =0;
  image: string | ArrayBuffer | null = null;

  @Output() productData = new EventEmitter<{name:string,description:string,price:number,image:string}>;



  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.displayImage(file);
  }

  displayImage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.image = reader.result;
    };
    reader.readAsDataURL(file);
  }

  addProduct(){
    if (this.validateForm()) {
      this.productData.emit({name:this.name,description:this.description,price:this.price,image:this.image as string})
      this.onResetForm();
  }
  };

  validateForm():boolean{
    if(!this.name || !this.description || !this.image || !this.price){
      alert("Please fill out all fields");
      return false;
    }
    return true;
  }
  onResetForm(){
    this.name = '';
  this.description = '';
  this.price = 0;
  this.image = '';
  }

}
