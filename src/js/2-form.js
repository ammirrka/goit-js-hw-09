const formData = {
  email: "",
  message: "",
};

document.querySelector(".feedback-form").addEventListener("input", handleInputChange);

document.querySelector(".feedback-form").addEventListener("submit", handleSubmit);

function saveToLocalStorage() {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    console.log(JSON.parse(savedData));
    return JSON.parse(savedData);
  }
  return null;
}

function handleInputChange(event) {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage();
}

function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert("Please fill all fields!");
    return;
  }
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  formData.email = "";
  formData.message = "";
  event.target.reset();
}

window.addEventListener("DOMContentLoaded", () => {
    const savedData = loadFromLocalStorage();
    if (savedData){
        document.querySelector("input[name='email']").value = savedData.email;
        document.querySelector("input[name='message']").value = savedData.message;
        formData.email = savedData.email;
        formData.message = savedData.message;
    }
})