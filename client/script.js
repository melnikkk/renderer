import { Renderer } from "../lib";
import {App} from "./App.js";

const root = document.querySelector('#root')

const app = Renderer.createComponent(App)

root.append(app.element)
