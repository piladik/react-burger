export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(accessToken) {
  const d = new Date();
  // 60 * 20 * 1000
  d.setTime(d.getTime() + 60 * 20 * 1000);

  accessToken = encodeURIComponent(accessToken);

  let cookie = "accessToken=" + accessToken;
  cookie += ";expires=" + d.toUTCString();
  document.cookie = cookie;
}

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}

// const signIn = async (form) => {
//   const data = await loginRequest(form)
//     .then((res) => {
//       let authToken;
//       res.headers.forEach((header) => {
//         if (header.indexOf("Bearer") === 0) {
//           authToken = header.split("Bearer ")[1];
//         }
//       });
//       if (authToken) {
//         setCookie("token", authToken);
//       }
//       return res.json();
//     })
//     .then((data) => data);

//   if (data.success) {
//     setUser({ ...data.user, id: data.user._id });
//   }
// };
