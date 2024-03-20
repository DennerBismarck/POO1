import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.deepPurple),
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Dicas"),
        ),
        body: DataBodyWidget(
          objects: dataObjects,
          columnNames: ["Nome", "Estilo", "IBU"],
          propertyNames: ["name", "style", "ibu"],
        ),
        bottomNavigationBar: NewNavBar(),
      ),
    );
  }
}

class NewNavBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    void botaoFoiTocado(int index) {
      print("Tocaram no botão $index");
    }

    return BottomNavigationBar(
      onTap: botaoFoiTocado,
      items: const [
        BottomNavigationBarItem(
          label: "Cafés",
          icon: Icon(Icons.coffee_outlined),
        ),
        BottomNavigationBarItem(
          label: "Cervejas",
          icon: Icon(Icons.local_drink_outlined),
        ),
        BottomNavigationBarItem(
          label: "Nações",
          icon: Icon(Icons.flag_outlined),
        ),
      ],
    );
  }
}

class DataBodyWidget extends StatelessWidget {
  final List<Map<String, String>> objects;
  final List<String> columnNames;
  final List<String> propertyNames;

  DataBodyWidget({
    required this.objects,
    required this.columnNames,
    required this.propertyNames,
  });

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: objects.length,
      itemBuilder: (BuildContext context, int index) {
        var obj = objects[index];
        return ListTile(
          title: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              for (var i = 0; i < columnNames.length; i++)
                Text("${columnNames[i]}: ${obj[propertyNames[i]]}"),
              Divider(), 
            ],
          ),
        );
      },
    );
  }
}

var dataObjects = [
  {"name": "La Fin Du Monde", "style": "Bock", "ibu": "65"},
  {"name": "Sapporo Premiume", "style": "Sour Ale", "ibu": "54"},
  {"name": "Duvel", "style": "Pilsner", "ibu": "82"},
  {"name": "Guinness Draught", "style": "Stout", "ibu": "45"},
  {"name": "Heineken", "style": "Pale Lager", "ibu": "23"},
  {"name": "Sierra Nevada Pale Ale", "style": "Pale Ale", "ibu": "38"},
  {"name": "Chimay Blue", "style": "Belgian Strong Ale", "ibu": "30"},
  {"name": "Pliny the Elder", "style": "Double IPA", "ibu": "100+"},
  {"name": "Weihenstephaner Hefeweissbier", "style": "Hefeweizen", "ibu": "14"},
  {"name": "Samuel Adams Boston Lager", "style": "Vienna Lager", "ibu": "30"},
  {"name": "Founders Breakfast Stout", "style": "Imperial Stout", "ibu": "60"},
  {"name": "Rochefort 10", "style": "Quadrupel", "ibu": "27"},
];
