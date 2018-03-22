<template>
<div>
<b-navbar toggleable="md" type="dark" variant="dark" style="background-color: #18191c!important;color:#FFF">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#"> </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="http://honglink.club" style="color:#FFF">Trang chủ</b-nav-item>
      <b-nav-item href="#/huong-dan" style="color:#FFF">Hướng dẫn</b-nav-item>
     <!-- <b-nav-item href="#/lien-he" style="color:#FFF">Liên hệ</b-nav-item> -->
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

     <!-- <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form> -->
     <b-navbar-nav right>
      <!-- <b-nav-item href="#" style="color:#FFF">ĐĂNG NHẬP</b-nav-item>-->
    </b-navbar-nav>
      

      <!-- <b-nav-item-dropdown right>
       
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>
</template>
<script>

export default {
    name:'navbar',
    data(){
        return {

        }
    }
}    
</script>

<style>
.b-nav-item{
    color: rgb(251, 251, 251);
}
.navbar-light .navbar-nav .nav-link {
    color: rgb(251, 251, 251);
}
</style>