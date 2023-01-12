document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form=document.querySelector('#new-item-form')
  form.addEventListener('submit',handleFormSubmit)

  const deleteButton=document.querySelector('#delete-button')
  deleteButton.addEventListener('click',handleDelete)

  
})

const handleFormSubmit=function(event){
  event.preventDefault()
  
  const resultParagraph=document.querySelector('#reading-list')
  const newListItem=document.createElement('li')
  const authorParagraph=document.createElement('p')
  const titleParagraph=document.createElement('p')
  const categoryParagraph=document.createElement('p')
  resultParagraph.appendChild(newListItem)
  newListItem.appendChild(authorParagraph)
  newListItem.appendChild(titleParagraph)
  newListItem.appendChild(categoryParagraph)
  
  title=this.title.value
  author=this.author.value
  category=this.category.value
  titleParagraph.textContent=title
  authorParagraph.textContent=author
  categoryParagraph.textContent=category

  // newListItem.textContent=`${title}\n ${author}\n${category}`
  // newListItem.textContent=`${title}\n ${author}\n${category}`
  // new-item-form.reset();
  this.title.value = ""
  this.category.value = ""

  this.author.value = ""
  console.log(resultParagraph)
  // document.getElementById('#new-item-form').reset()
  // newListItem.textContent=resultParagraph 
}
const handleDelete=function(){
  const resultParagraph=document.querySelector('#reading-list')
  resultParagraph.innerHTML=''
}
