<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Link } from "@inertiajs/vue3";

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div class="d-flex flex-column min-h-screen">
        <div class="min-h-screen ">
            <nav class="" :style="{ 'background-color': 'rgb(221, 83, 83)'  }">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex" >

                                <NavLink :href="route('dashboard')" :active="route().current('dashboard')"> Home </NavLink>
                                <NavLink :href="route('createrecipe')" :active="route().current('createrecipe')" >Add new recipe</NavLink>
                                <NavLink :href="route('recipe.index')" :active="route().current('recipe.index')" >All recipes</NavLink>
                                <NavLink :href="route('myrecipes')" :active="route().current('myrecipes')" > My recipes </NavLink>
                                <NavLink :href="route('randomrecipe')" :active="route().current('randomrecipe')" > Random recipe </NavLink>
                                <NavLink :href="route('mostpopular')" :active="route().current('mostpopular')" > Most popular recipes </NavLink>
                                
                                

                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">

                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink
                                        :href="route('profile.index')"
                                            as="button"
                                        >
                                            My profile
                                        </DropdownLink>

                                        <DropdownLink
                                            :href="route('logout')"
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </DropdownLink>

                                        
                                    </template>
                                </Dropdown>
                            </div>

                            

                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button
                                @click="
                                    showingNavigationDropdown =
                                        !showingNavigationDropdown
                                "
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex':
                                                !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex':
                                                showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown,}" class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1 font-bold">

                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">Home</ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('createrecipe')" :active="route().current('createrecipe')">Add new recipe</ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('recipe.index')" :active="route().current('recipe.index')">Recipes</ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('myrecipes')" :active="route().current('myrecipes')">My recipes</ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('randomrecipe')" :active="route().current('randomrecipe')">Random recipes</ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('mostpopular')" :active="route().current('mostpopular')">Most popular recipes</ResponsiveNavLink>
                       
                    
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">
                                {{ $page.props.auth.user.email }}
                            </div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button" > Log Out</ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header :style="{ 'background-color': 'rgb(221, 83, 83)'  }" class=" shadow " v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main class="flex-grow">
                <slot name="main"/>
            </main>

            <!-- Footer -->
             <footer :style="{ 'background-color': 'rgb(221, 83, 83)' , 'text-align': 'center'  }" class="bg-white shadow " v-if="$slots.footer">
                <div class="  py-6 px-4 ">
                    <slot name="footer" />
                </div>
            </footer> 



        </div>
    </div>
</template>

<style>



</style>