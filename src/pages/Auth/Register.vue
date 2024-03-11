<template>
    <div class="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
        <h3 class="text-3xl mb-4 font-bold text-black">{{ $t('oauth2.register') }}</h3>
        <h1 class="sr-only">Register new account</h1>
        <form action="/login" class="w-full max-w-sm">
            <div class="mb-6">
                <label for="email"
                    class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('form.email') }}
                    </label><input type="email" id="email"
                    class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                    :placeholder="$t('form.place_holder.email')"
                    >
            </div>
            <div class="mb-6">
                <label for="password"
                    class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('form.password') }}</label><input
                    type="password" id="password"
                    class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                    :placeholder="$t('form.place_holder.password')"
                    >
            </div>
            <div class="mb-6">
                <label for="re-password"
                    class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('form.re_password') }}</label><input
                    type="password" id="re-password"
                    class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                    :placeholder="$t('form.place_holder.password')"
                    >
            </div>
            <button type="submit"
                class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full"><span>{{ $t('button.confirm') }}</span></button><input type="hidden" name="remember" value="true">

        </form>
    </div>
    <footer class="relative shrink-0">
        <div
            class="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
            <p class="text-center sm:text-left">{{ $t('form.has_account') }}</p><RouterLink
                class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
                :to="getPath('oauth2.index')"><span>{{ $t('oauth2.login') }} <span aria-hidden="true">→</span></span></RouterLink>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { getPath } from '@/utils/utils/url.util';


</script>

<style scoped>

</style>