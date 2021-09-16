(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{483:function(e,t,a){"use strict";a.r(t);var s=a(40),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ide-구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ide-구성"}},[e._v("#")]),e._v(" IDE 구성")]),e._v(" "),a("p",[e._v("본 가이드에서는 "),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),a("OutboundLink")],1),e._v("를 활용하여 설명하고 있어, Springboot을 위한 설정과 환경변수 내용을 설명 합니다.")]),e._v(" "),a("h2",{attrs:{id:"step-1-jdk-11-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-jdk-11-설치"}},[e._v("#")]),e._v(" Step 1: JDK 11 설치")]),e._v(" "),a("ul",[a("li",[e._v("jdk-11.0.11-x64 MSI : redhat 가입 필요. "),a("a",{attrs:{href:""}},[e._v("https://developers.redhat.com/products/openjdk/download")])]),e._v(" "),a("li",[e._v("JDK_HOME 등록")]),e._v(" "),a("li",[e._v("JAVA_HOME 등록")])]),e._v(" "),a("h2",{attrs:{id:"step-2-maven-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-maven-설치"}},[e._v("#")]),e._v(" Step 2: Maven 설치")]),e._v(" "),a("ul",[a("li",[e._v("maven 설치 : download(https://mirror.navercorp.com/apache/maven/maven-3/3.8.1/binaries/apache-maven-3.8.1-bin.zip)")]),e._v(" "),a("li",[e._v("unzip : c:\\maven")]),e._v(" "),a("li",[e._v("환경변수 설정: MAVEN_HOME 등록")]),e._v(" "),a("li",[e._v("Path 추가 :%MAVEN_HOME%\\bin")]),e._v(" "),a("li",[e._v("SSL Invalidate 설정 : [TODO]")])]),e._v(" "),a("h2",{attrs:{id:"step-3-vscode-extension-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-vscode-extension-설치"}},[e._v("#")]),e._v(" Step 3: VSCode extension 설치")]),e._v(" "),a("p",[a("a",{attrs:{href:""}},[e._v("https://code.visualstudio.com/docs/java/extensions")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=redhat.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Language Support for Java(TM) by Red Hat"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug",target:"_blank",rel:"noopener noreferrer"}},[e._v("Debugger for Java"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java Test Runner"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven for Java"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project Manager for Java"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio IntelliCode"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-spring-boot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Boot Tools"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Initializr Java Support"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Boot Dashboard"),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("export extension list")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("code --list-extensions "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" extension.txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("import extension list")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# powershell")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v(" extension.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("  % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"code --install-extension '),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$_")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#linux")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" extension.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("xargs")]),e._v(" -L "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" code --install-extension\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])]),e._v(" "),a("h2",{attrs:{id:"step-4-run-debug-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-run-debug-설정"}},[e._v("#")]),e._v(" Step 4: Run/Debug 설정")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/htdp1/sam-springboot/archive/refs/tags/v1.0.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("download sample project"),a("OutboundLink")],1)]),e._v(" "),a("li")])])}),[],!1,null,null,null);t.default=r.exports}}]);