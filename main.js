// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------

let fields = document.getElementById("fields");


for (let x = 0; x < formData.length; x++) {
  if (formData[x]["type"] === "select") {
    let select = document.createElement("select");
    fields.appendChild(select);

    for (let i = 0; i < formData[x].options.length; i++) {
      let options = document.createElement("option")
      select.appendChild(options);
      options.innerHTML = formData[x].options[i]["label"];
      options.setAttribute("value", formData[x].options[i].value);
    }


  } else if (formData[x]["type"] === "textarea") {

    let textarea = document.createElement("textarea");
    fields.appendChild(textarea);

    textarea.setAttribute("type", formData[x]["type"]);
    textarea.setAttribute("placeholder", formData[x]["label"]);
    textarea.setAttribute("id", formData[x]["id"]);
    textarea.setAttribute("icon", formData[x]["icon"]);
    textarea.setAttribute("options", formData[x]["options"]);

  } else {
    let input = document.createElement("input");
    fields.appendChild(input);
    input.setAttribute("type", formData[x]["type"]);
    input.setAttribute("placeholder", formData[x]["label"]);
    input.setAttribute("id", formData[x]["id"]);
    input.setAttribute("icon", formData[x]["icon"]);
    input.setAttribute("options", formData[x]["options"]);
  }
}
