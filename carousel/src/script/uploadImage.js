export class UploadImage {
  constructor(button, parent) {
    this.upload = document.querySelector(button);
    this.carousel = document.querySelector(parent);
  }

  uploadHandler() {
    this.upload.addEventListener(
      "change",
      ((e) => {
        const file = e.target.files[0];
        if (!file.type.match("image/.*")) {
          alert("이미지 확장자만 업로드 가능합니다.");
          return;
        }
        const reader = new FileReader();
        const _this = this;
        reader.onload = function (e) {
          const li = document.createElement("li");
          li.innerHTML = `<img src=${e.target.result} alt=${file.name}>`;
          _this.carousel.append(li);
        };
        reader.readAsDataURL(file);
      }).bind(this)
    );
  }
}
