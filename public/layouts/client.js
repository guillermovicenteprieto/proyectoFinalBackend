// window.onload = () => {
//     const socket = io();
  
//     socket.on('messages', data => {
//       loadMessages(data)
//     });
  
//     function loadMessages(data) {
//       const html = data.map((elem, index) => {
//         return (`<div class="msgsChat">
//                   <span class="email"><b>${elem.email}</b></span>
//                   <span class="dateMsg" >${elem.date}</span>
//                 </div>
//                 <div><span class="msg">${elem.text}</div>
//                 <hr>`)
//       }).join(" ");
//       document.getElementById('messages').innerHTML = html;
//     }
  
//     document.getElementById('chatForm').addEventListener('submit', (e) => {
//       e.preventDefault()
//       addMsg()
//     })
//     function addMsg() {
//       console.log("nuevoMensaje")
//       const newMsg = {
//         email: document.getElementById('email').value,
//         text: document.getElementById('text').value
//       }
//       socket.emit('message-new', newMsg)
//     }
//   }


import { cargarChat, onNuevoChat, onSelectChat } from "./socket.js";
import { onHandleSubmit, renderChat, appendChat, fillForm } from "./ui.js";

onNuevoChat(appendChat);
cargarChat(renderChat);
onSelectChat(fillForm);

const chatForm = document.querySelector("#chatForm");
chatForm.addEventListener("submit", onHandleSubmit);