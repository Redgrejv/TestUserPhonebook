<template>
    <el-menu class="menu">
        <el-menu-item class="menu_item">
            <el-button
            type="text"
            :icon="collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></el-button>
        </el-menu-item>
        
        <el-menu-item class="menu_item"
            v-for="(route, i) in navigations"
            :class="{'active': route.name === $route.name}"
            @click="$router.push(route)"
            :key="i" >
            {{route.name}}
        </el-menu-item>
        
        
    </el-menu>
</template>

<script>
import routes from '../router/routes';

export default {
    name: 'NavMenu',
    computed: {
        navigations() {
            return routes.filter(r => r.meta.show );
        }
    },
    data() {
        return {
            collapsed: true
        }
    },
}
</script>

<style lang="scss" scoped>
    .menu {
        width: 250px;
        max-width: 250px;
        min-width: 250px;
        left: 0;
        top: 0;
        background-color: rgb( 14 , 18, 18 );
        min-height: 100vh;

        &_item {
            color: goldenrod;
            
            &:hover {
                background-color: rgb(25, 32, 32);
            }

            &.active {
                background-color:rgb(57, 63, 63);
            }
        }
    }
</style>