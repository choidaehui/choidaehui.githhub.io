<<<<<<< HEAD
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%

  System.out.println(request.getMethod());

  String name = request.getParameter("name");
  System.out.println("출력이름 : "+name);

%>

<%=name %>


</body>
=======
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%

  System.out.println(request.getMethod());

  String name = request.getParameter("name");
  System.out.println("출력이름 : "+name);

%>

<%=name %>


</body>
>>>>>>> e6cecd277d83b652e245977eca674e0288ab266c
</html>