//global
let studentList = [
  {
    ten: "Nguyen Van A",
    mssv: "123",
    namSinh: "2004",
    diaChi: "hello world",
    gioiTinh: true,
  },
  {
    ten: "Nguyen Van B",
    mssv: "1234",
    namSinh: "2004",
    diaChi: "hello world",
    gioiTinh: true,
  },
  {
    ten: "Nguyen Van C",
    mssv: "1235",
    namSinh: "2004",
    diaChi: "hello world",
    gioiTinh: true,
  },
];

//loadUpdateFuntion
const update = () => {
  const tbody = document.querySelector("#tbody");

  let content = studentList.map((student, index) => {
    return `<tr>
                <td>${index}</td> 
                <td>${student.ten}</td>
                <td>${student.mssv}</td>
               <td>${student.namSinh}</td>
               <td>${student.diaChi}</td>
               <td><button id="btn-delete" onclick=handleDelete(${student.mssv})>delete</button><button onclick="handleUpdate('${student.ten}','${student.mssv}','${student.namSinh}','${student.diaChi}')" >update</button></td>
            </tr>`;
  });
  //insert infomation
  tbody.innerHTML = content.join("");
};
const handleUpdate = (ten, mssv, namSinh, diaChi) => {
  document.getElementById("fullName").value = ten;
  document.getElementById("MSSV").value = mssv;
  document.getElementById("year").value = namSinh;
  document.getElementById("address").value = diaChi;
  handleDelete(mssv);
};

const handleDelete = (mssv) => {
  studentList = studentList.filter((student, i) => student.mssv != mssv);
  console.log(studentList);
  update();
};
update();

function save() {
  let fullName = document.getElementById("fullName").value;
  let MSSV = document.getElementById("MSSV").value;
  let year = document.getElementById("year").value;
  let address = document.getElementById("address").value;
  let gender = "";
  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }
  if (_.isEmpty(fullName)) {
    document.getElementById("fullName-error").innerHTML =
      "Vui lòng nhập họ và tên";
  } else if (fullName.trim().length <= 2) {
    document.getElementById("fullName-error").innerHTML =
      "Tên không được ít hơn 2 kí tự";
  } else if (fullName.trim().length > 50) {
    document.getElementById("fullName-error").innerHTML =
      "Tên không được lớn hơn 50 kí tự";
  } else {
    document.getElementById("fullName-error").innerHTML = "";
  }

  if (_.isEmpty(MSSV)) {
    document.getElementById("MSSV-error").innerHTML = "Vui lòng nhập MSSV";
  } else if (MSSV === String) {
    document.getElementById("MSSV-error").innerHTML = "MSSV phải là số";
  } else if (MSSV < 100) {
    document.getElementById("MSSV-error").innerHTML = "MSSV phải có 3 kí tự";
  } else {
    document.getElementById("MSSV-error").innerHTML = "";
  }

  if (_.isEmpty(year)) {
    document.getElementById("year-error").innerHTML = "Vui lòng nhập năm sinh";
  } else if (year <= 1980 && year >= 2023) {
    document.getElementById("year-error").innerHTML = "Năm sinh không hợp lệ";
  } else {
    document.getElementById("year-error").innerHTML = "";
  }

  if (_.isEmpty(address)) {
    document.getElementById("address-error").innerHTML =
      "Vui lòng nhập địa chỉ";
  } else if (address.trim().length <= 2) {
    document.getElementById("address-error").innerHTML =
      "Địa chỉ không được ít hơn 2 kí tự";
  } else if (address.trim().length > 50) {
    document.getElementById("address-error").innerHTML =
      "Địa chỉ không được lớn hơn 50 kí tự";
  } else {
    document.getElementById("address-error").innerHTML = "";
  }

  if (_.isEmpty(gender)) {
    document.getElementById("gender-error").innerHTML =
      "Vui lòng chọn giới tính";
  } else {
    document.getElementById("gender-error").innerHTML = "";
  }

  if (fullName && MSSV && year && address && gender) {
    console.log(fullName, MSSV, year, address, gender);
    studentList.push({
      ten: fullName,
      mssv: MSSV,
      namSinh: year,
      diaChi: address,
      gioiTinh: gender == 1 ? "true" : "false",
    });
    update();
    document.getElementById("fullName").value = "";
    document.getElementById("MSSV").value = "";
    document.getElementById("year").value = "";
    document.getElementById("address").value = "";
  }
}
