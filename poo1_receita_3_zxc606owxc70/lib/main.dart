import 'package:flutter/material.dart';

void main() {

  MyApp app = MyApp();

  runApp(app);

}

class MyApp extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    

    return MaterialApp(

      theme: ThemeData(primarySwatch: Colors.deepPurple),

      debugShowCheckedModeBanner:false,

      home: Scaffold(
        appBar: NewAppBar(),
        body: DataBodyWidget(objects:[
          "La Fin Du Monde - Bock - 65 ibu",

          "Sapporo Premiume - Sour Ale - 54 ibu",

          "Duvel - Pilsner - 82 ibu",
        ]),

        bottomNavigationBar: NewNavBar(botoes: [
          NavBarIcon(icon: Icon(Icons.coffee_outlined), label: "Cafés"),
          NavBarIcon(icon: Icon(Icons.local_drink_outlined), label: "Cervejas"),
          NavBarIcon(icon: Icon(Icons.flag_outlined), label: "Nações"),

        ]),

      ));

  }

}

class NavBarIcon{
  final Icon icon;
  final String label;

  NavBarIcon({required this.icon, required this.label});
}


class NewNavBar extends StatelessWidget {

  final List<NavBarIcon> botoes;
  NewNavBar({this.botoes = const []});

  void botaoFoiTocado(int index) {
    print("Tocaram no botão $index");
  }

  @override

  Widget build(BuildContext context) {
    return BottomNavigationBar(onTap: botaoFoiTocado, items: botoes.map(
      (botao) => BottomNavigationBarItem(icon: botao.icon, label: botao.label)).toList(),
    );

  }

}

class DataBodyWidget extends StatelessWidget {

  List<String> objects;

  DataBodyWidget( {this.objects = const [] });

  Expanded processarUmElemento(String obj){
    return Expanded(                
          child: Center(child: Text(obj)),
        );
  }

  @override
  Widget build(BuildContext context) {
    return Column(children: objects.map( 
      (obj) => Expanded(
        child: Center(child: Text(obj)),
        )
      ).toList());
  }
}


class NewAppBar extends StatefulWidget implements PreferredSizeWidget {
  NewAppBar();

  @override
  _NewAppBarState createState() => _NewAppBarState();

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}

class _NewAppBarState extends State<NewAppBar> {
  String _selectedValue = '1';

  void _onSelected(String value) {
    setState(() {
      _selectedValue = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text("Dicas"),
      actions: [
        PopupMenuButton(
          onSelected: _onSelected,
          itemBuilder: (BuildContext context) => [
            PopupMenuItem(
              value: '1',
              child: Text('Roxo'),
            ),
            PopupMenuItem(
              value: '2',
              child: Text('Preto'),
            ),
            PopupMenuItem(
              value: '3',
              child: Text('Azul'),
            ),
          ],
        ),
      ],
    );
  }
}