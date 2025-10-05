import { makeObservable, observable, action, reaction } from 'mobx';

class CartStore {
  loading = false;
  error = null;
  cart = [];

  constructor() {
    makeObservable(this, {
      cart: observable,
      loading: observable,
      error: observable,
      addToCart: action,
      DeleteFromCart: action,
      ClearCart: action,
      setLoading: action,
      setError: action,
    });
    
    this.loadCartFromLocalStorage();
    
    reaction(
      () => this.cart.slice(),
      (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    );
  }

  loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        this.cart = JSON.parse(savedCart);
      } catch (error) {
        console.error("Failed to parse saved cart:", error);
      }
    }
  }

  setLoading = (condition) => {
    this.loading = condition;
  }

  setError = (error) => {
    this.error = error;
  }

  getCart = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.cart)
        }, 250)
    })
  }

  addToCart = (item) => {
    if(item.colors[0].sizes[0] === null) {
      alert('Choose a size')
    } else {
      const cartId = `${item.id}${item.name}${item.colors[0].name}${item.colors[0].sizes[0]}`
      !this.cart.find(el => el.cartId === cartId) ? this.cart.push({...item, cartId}) : alert('Already in cart');
    }
  };

  DeleteFromCart = (id) => {
    this.cart = this.cart.filter((item) => item.cartId !== id);
  };

  ClearCart = () => {
    this.cart = []
  };

  get totalItems() {
    return this.cart.length;
  }

}

export const cartStore = new CartStore();