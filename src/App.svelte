<script lang="ts">
	import "reflect-metadata";
	import {container} from "tsyringe";
	import Router, {wrap, push} from 'svelte-spa-router'
	import Button, {Label} from '@smui/button';

	import Tab, {Icon} from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Spreadsheet from "x-data-spreadsheet";
	import Dialog from './Dialog.svelte'
	import Page from './Page.svelte'
	import Login from './view/login/Login.svelte'
	import {SubjectStore} from "./store/SubjectStore";
	import TableBrowser from './view/browser/TableBrowser.svelte'
	import DrawerList from "./view/nav/Drawer/DrawerList.svelte";
	import TopBar from "./view/nav/TopBar.svelte";

	let e: String = "world";
	let power;

	let open = false;
	let tab;
	let active;
	let subjectObj = null
	SubjectStore.subscribe((value) => {
		subjectObj = value
	})
	let wrappedDialog = wrap(Dialog, {}, (detail) => {
		if (subjectObj === null) push("/login")
		return subjectObj !== null
	})
	let wrappedPage = wrap(Page, {}, (detail) => {
		if (subjectObj === null) push("/login")
		return subjectObj !== null
	})
	let wrappedTables = wrap(TableBrowser, {}, (detail) => {
		if (subjectObj === null) push("/login")
		return subjectObj !== null
	})
	let routes = {
		'/tables': wrappedTables,
		'/dialog/*': wrappedDialog,
		'/page/*': wrappedPage,
		'/dialog': wrappedDialog,
		'/page': wrappedPage,
		'/login': Login
	}

</script>

	<Router {routes}></Router>

<style global>
	*{
		font-family: PingFang, serif
	}
	body {
		/* this will apply to <body> */
		padding: 0;
	}
</style>
