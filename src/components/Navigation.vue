<template>
  <div>
  <header :class="{'scrolled-nav':scrollPosition}">
      <nav>
      <div class="branding">
        <img class="logo" src="https://raw.githubusercontent.com/johnkomarnicki/navigation-menu/Starter-Files/src/assets/logo.png" alt="">
      </div>
      <ul v-show="!mobile" class="navigation">
          <li><router-link class="link" to="/">Home</router-link></li>
          <li><router-link class="link" to="/about">About</router-link></li>
          <li><router-link class="link" :to="{name:'Product',params:{name:'Product 1'}}">Product 1</router-link></li>
          <li><router-link class="link" :to="{name:'Product',params:{name:'Product 2'}}">Product 2</router-link></li>
          <li><router-link class="link" to="/contact">Contact</router-link></li>
          <button @click="goToProduct3()">Product 3</button>
      </ul>
      <div class="icon">
      <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' :mobileNav}"/>
      </div>
      <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav">
           <li><router-link class="link" to="/">Home</router-link></li>
          <li><router-link class="link" to="/about">About</router-link></li>
          <li><router-link class="link" :to="{name:'Product',params:{name:'Product 1'}}">Product 1</router-link></li>
          <li><router-link class="link" :to="{name:'Product',params:{name:'Product 2'}}">Product 2</router-link></li>
          <li><router-link class="link" to="/contact">Contact</router-link></li>
          <button @click="goToProduct3()">Product 3</button>
      </ul>
      </transition>
      </nav>
  </header>
  </div>
   <router-view/>
</template>

<script>
export default {
  name:"navigation",
  data() {
    return {
      scrollPosition:null,
      mobile:null,
      mobileNav:null,
      windowWidth:null,
    };
  },
  created(){
    window.addEventListener("resize",this.checkScreen);
    this.checkScreen();
  },
  methods: {
    goToProduct3: function () {
      this.$router.push({ name: 'Product', params: { name: 'HHHHH' } })
    },
    toggleMobileNav(){
      this.mobileNav= !this.mobileNav;
    },

    checkScreen(){
      this.windowWidth=window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile=true;
        return;
      }
      this.mobile=false;
      this.mobileNav=false;
      return;
    },
  },
};
</script>
<style scoped>
header{
  background-color:rgba(0,0,0,0.8);
  z-index:90;
  width:100%;
  position:fixed;
  transition: 0.5s ease alt;
  color:#fff;
}
    nav {
      position:relative;
      display:flex;
      flex-direction:row;
      padding:12px 0;
      transition:.5s ease alt;
      width:90%;
      margin:0 auto;
      @media(min-width:1140px){
        max-width:1140px;
      }}
     ul,
    .link{
      font-weight:500;
      color:#fff;
      list-style:none;
      text-decoration:none;
    }
    li{
      text-transform:uppercase;
      padding:16px;
      margin-left:16px;
    }
    .link{
      font-size:14px;
      transition:.5s ease alt;
      padding-bottom:4px;
      border-bottom:2px solid transparent;
      cursor:pointer;
    }
    .link:hover{
        color:#D8BFD8;
        border-color:blueviolet;
      }
    .branding{
      display:flex;
      align-items:center;
    }
    .navigation{
      display:flex;
      align-items:center;
      flex:1;
      justify-content:flex-end;
    }
    .logo{
      width:50px;
      transition:.5s ease alt;
    }
    .icon{
      display:flex;
      align-items:center;
      position:absolute;
      top:0;
      right:24px;
      height:100%;
    }
    i{
      cursor:pointer;
      font-size:24px;
      transition:0.8s ease alt;
    }
   .icon-active{
     transform: rotate(180deg);
     color:#D8BFD8;
      }
     .dropdown-nav{
       display:flex;
       flex-direction:column;
       position:fixed;
       width:100%;
       max-width:250px;
       height:100%;
       background-color:#fff;
       top:0;
       left:0;
     } 
     li{
       margin-left:0;
     }
     .dropdown-nav .link{
       color:#000;
     }
     a {
  color:#666;
  text-decoration: none;
}
.router-link-active {
  font-weight: bold;
  color:#D8BFD8;
}
</style>