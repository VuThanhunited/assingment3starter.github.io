`use strick`;
function handleSubmit() {
  // Lay gia tri cua input email va chuyen sang in thuong
  const emailValue = document.getElementById(`email`).value.toLocaleLowerCase();

  // lay element cua the p hien thi loi
  const errorEmail = document.getElementById(`error-email`);
  // dieu kien de la mot email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkMail = emailValue.match(regex);
  // ley phan chua thong tin user
  const sectionContent = document.querySelector("#personal-info .info");
  console.log("check section", sectionContent);

  // lay element de kiem soat submit
  const submitControl = document.querySelector(".submit-email");
  if (checkMail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".container");
  const viewMore = parentElement.querySelector(".view-more");
  if (viewMore.innerHTML == "View more") {
    const sectionContent = parentElement.querySelectorAll(".content");
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.innerHTML = "View less";
  } else {
    const sectionContent = parentElement.querySelectorAll(".content");
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.innerHTML = "View more";
  }
}
