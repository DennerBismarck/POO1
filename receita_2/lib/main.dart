import 'package:flutter/material.dart';


class NavBarIcon{
  final Icon icon;
  final String label;

  NavBarIcon({required this.icon, required this.label});
}

class NewNavBar extends StatelessWidget{

  final List<NavBarIcon> botoes;

  NewNavBar({this.botoes = const []});

  void botaoFoiTocado(int index) {
    print("Tocaram no botão $index");
  }

  @override

  Widget build(BuildContext context) {

    return BottomNavigationBar(onTap: botaoFoiTocado, items: botoes
    .map((botao) => 
        BottomNavigationBarItem(icon: botao.icon, label: botao.label))
    .toList(),
    );

  }

}

class NewAppBar extends StatelessWidget implements PreferredSizeWidget {
  NewAppBar();

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text("Dicas"),
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}

class NewScaffold extends StatelessWidget{
  NewScaffold();

  @override
  Widget build(BuildContext context){
    return Scaffold(

        appBar: NewAppBar(),

        body: Column(children: [

          Expanded(

            child: Text("La Fin Du Monde - Bock - 65 ibu"),

          ),

          Expanded(

            child: Text("Sapporo Premiume - Sour Ale - 54 ibu"),

          ),

          Expanded(

            child: Text("Duvel - Pilsner - 82 ibu"),

          )

        ]),

        bottomNavigationBar: NewNavBar(
          botoes: [
            NavBarIcon(
              icon: Icon(Icons.apartment, color: Colors.blue),
              label: "Home",
            ),
            NavBarIcon(
              icon: Icon(Icons.ac_unit, color: Colors.green),
              label: "Temperature",
            ),
            NavBarIcon(
              icon: Icon(Icons.access_alarm, color: Colors.red),
              label: "Alarm",
            ),
            NavBarIcon(
              icon: Icon(Icons.accessible, color: Color.fromARGB(255, 0, 0, 0)),
              label: "Cadeirante",
            ),
            NavBarIcon(
              icon: Icon(Icons.drag_handle, color: Color.fromARGB(255, 255, 230, 0)),
              label: "grag",
            ),
          ]
        ),
      );
  }
}




void main() {

  MaterialApp app = MaterialApp(

      theme: ThemeData(primarySwatch: Colors.deepPurple),
      home: NewScaffold(),

  );
  runApp(app);

}