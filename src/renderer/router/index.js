import Vue from "vue"
import Router from "vue-router"

import pageNotFound from "../components/pageNotFound"

Vue.use(Router)

let routes = [
	{
		path: "/workspace",
		name: "workspace",
		component: require("../components/workspacePage").default
	},
	{
		path: "/history",
		name: "history",
		component: require("../components/history").default
	},
	{
		path: "/",
		name: "welcome",
		component: require("../components/WelcomePage").default
	},
	{
		path: "*",
		name: "pageNotFound",
		component: pageNotFound
	}
]

const router = new Router({
	base: "/",
	mode: "history",
	routes
})

export default router
