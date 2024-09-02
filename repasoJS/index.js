const btnAddTarea = document.getElementById('add-tarea')
const lista = document.getElementById('lista')

btnAddTarea.addEventListener('click', ()=>{
    const inputTarea = document.getElementById('input-tarea')
    const textoInput = inputTarea.value

    if (textoInput){
        const nuevaTarea = document.createElement('li')
        const textoTarea = document.createElement('span')
        textoTarea.textContent = textoInput
        textoTarea.style.textDecoration = "none"
        nuevaTarea.setAttribute('class', 'item')
        nuevaTarea.appendChild(textoTarea)
        
        const btnMarcarTarea = document.createElement('button')
        btnMarcarTarea.textContent = 'Marcar'
        btnMarcarTarea.addEventListener('click', ()=>{
            if (textoTarea.style.textDecoration == 'none'){
                textoTarea.style.textDecoration = 'line-through'
                btnMarcarTarea.textContent = 'Desmarcar'
            }else{
                textoTarea.style.textDecoration = 'none'
                btnMarcarTarea.textContent = 'Marcar'
            }
        })

        const btnEliminar = document.createElement('button')
        btnEliminar.textContent = "Eliminar"
        btnEliminar.addEventListener('click', ()=>{
            lista.removeChild(nuevaTarea)
        })

        const btnEditarTarea = document.createElement('button')
        btnEditarTarea.textContent = 'Editar'
        btnEditarTarea.addEventListener('click', ()=>{
            if (btnEditarTarea.textContent === 'Editar'){

                const inputEdit = document.createElement('input')
                inputEdit.value = textoTarea.textContent
                nuevaTarea.replaceChild(inputEdit,textoTarea)
                
                btnEditarTarea.textContent = 'Guardar'
                nuevaTarea.removeChild(btnMarcarTarea)
                
                const btnCancelar = document.createElement('button')
                btnCancelar.textContent = 'Cancelar'
                nuevaTarea.replaceChild(btnCancelar, btnEliminar)

                btnCancelar.addEventListener('click', ()=>{
                    nuevaTarea.replaceChild(textoTarea, inputEdit)
                    nuevaTarea.replaceChild(btnEliminar,btnCancelar)
                    btnEditarTarea.textContent = 'Editar'
                    nuevaTarea.appendChild(btnMarcarTarea)
                })
                
                btnEditarTarea.addEventListener('click', ()=>{
                    const inputValidado = inputEdit.value
                    if (inputValidado){
                        textoTarea.textContent = inputValidado
                        nuevaTarea.replaceChild(textoTarea, inputEdit)
                        nuevaTarea.replaceChild(btnEliminar,btnCancelar)
                        btnEditarTarea.textContent = 'Editar'
                        nuevaTarea.appendChild(btnMarcarTarea)
                    }
                }, { once: true });
            }
        })

        nuevaTarea.append(btnEditarTarea,btnEliminar,btnMarcarTarea)
        lista.insertAdjacentElement('afterbegin', nuevaTarea)
        inputTarea.value = ""
    }
})