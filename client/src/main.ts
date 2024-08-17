/// <reference types="vite/client" />
import van from 'vanjs-core'
import 'bootstrap/dist/css/bootstrap.min.css'

const { div } = van.tags

van.add(document.body, div({ class: 'fs-1 m-5 fw-bold' }, 'Hello World'))