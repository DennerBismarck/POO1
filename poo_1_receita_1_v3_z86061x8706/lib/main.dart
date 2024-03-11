import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Primeiro app',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: Scaffold(
        appBar: AppBar(title: Text("Cervejas")),
        body: SingleChildScrollView(
          child: Column(
            children: [
              _buildExpansionTile("La Fin Du Monde", "12% alc", "Country: Belgium"),
              _buildExpansionTile("Sapporo Premium", "8% alc", "Country: Japan"),
              _buildExpansionTile("Duvel", "10% alc", "Country: Belgium"),
              // Adicione mais cervejas conforme necessário
            ],
          ),
        ),
        bottomNavigationBar: BottomAppBar(
          child: Row(
            children: [
              Container(
                height: 5,
              ),
              Container(
                height: 5,
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildExpansionTile(String title, String subtitle1, String subtitle2) {
    return ExpansionTile(
      title: Text(title),
      trailing: Icon(
        _isExpanded ? Icons.arrow_drop_up : Icons.arrow_drop_down,
      ),
      onExpansionChanged: (bool expanding) {
        setState(() {
          _isExpanded = expanding;
        });
      },
      children: [
        ListTile(
          title: Text(subtitle1),
        ),
        ListTile(
          title: Text(subtitle2),
        ),
      ],
    );
  }
}
