function sideBar() {
  const sideBarClassList = document.querySelector("#sideBar").classList;
  const mainDivClassList = document.querySelector("#main").classList;

  if (sideBarClassList.contains("hidden")) {
    sideBarClassList.remove("hidden");
    sideBarClassList.add("block");
    sideBarClassList.remove("basis-1/5");
    sideBarClassList.add("absolute");
    sideBarClassList.add("w-[60%]");
    sideBarClassList.add("z-40");
    mainDivClassList.add("blur-sm");
  } else {
    sideBarClassList.add("hidden");
    sideBarClassList.add("basis-1/5");
    sideBarClassList.remove("absolute");
    sideBarClassList.remove("w-[60%]");
    sideBarClassList.remove("z-40");
    mainDivClassList.remove("blur-sm");
  }
}

function sideBarClose() {
  sideBar();
}
