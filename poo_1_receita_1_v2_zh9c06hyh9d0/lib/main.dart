import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:transparent_image/transparent_image.dart';

void main() {
  MaterialApp app = MaterialApp(
    title: 'Primeiro app',
    theme: ThemeData(
      primarySwatch: Colors.green, 
      textTheme: GoogleFonts.latoTextTheme(),
    ),
    home: Scaffold(
      appBar: AppBar(title: Text("Cervejas")),
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: DataTable(
            columns: const <DataColumn>[
              DataColumn(
                label: Expanded(
                  child: Text('Nome', style: TextStyle(fontWeight: FontWeight.bold)),
                ),
              ),
              DataColumn(
                label: Expanded(
                  child: Text('Estilo', style: TextStyle(fontWeight: FontWeight.bold)),
                ),
              ),
              DataColumn(
                label: Expanded(
                  child: Text('IBU', style: TextStyle(fontWeight: FontWeight.bold)),
                ),
              ),
            ],
            rows: <DataRow>[
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("La Fin Du Monde")),
                  DataCell(Text("Bock")),
                  DataCell(Text("65")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Sapporo Premium")),
                  DataCell(Text("Sour Ale")),
                  DataCell(Text("54")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Duvel")),
                  DataCell(Text("Pilsner")),
                  DataCell(Text("82")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Heineken")),
                  DataCell(Text("Pale Lager")),
                  DataCell(Text("23")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Guinness")),
                  DataCell(Text("Stout")),
                  DataCell(Text("45")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Chimay Blue")),
                  DataCell(Text("Belgian Strong Dark Ale")),
                  DataCell(Text("35")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Budweiser")),
                  DataCell(Text("American Lager")),
                  DataCell(Text("12")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Samuel Adams Boston Lager")),
                  DataCell(Text("Vienna Lager")),
                  DataCell(Text("30")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Stone IPA")),
                  DataCell(Text("American IPA")),
                  DataCell(Text("65")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Pilsner Urquell")),
                  DataCell(Text("Pilsner")),
                  DataCell(Text("40")),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text("Sierra Nevada Pale Ale")),
                  DataCell(Text("American Pale Ale")),
                  DataCell(Text("38")),
                ],
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        child: Row(
          children: [
            Expanded(
              flex: 2,
              child: Container(height:5),
            ),
            ElevatedButton(
              child: Text("Fabrício"),
              onPressed: null,
            ),
            ElevatedButton(
              child: Text("Luiz Paulo"),
              onPressed: null,
            ),
            ElevatedButton(
              child: IconButton(
                icon: const Icon(Icons.dangerous),
                onPressed: null,
              ),
              onPressed: null,
            ),
            Expanded(
              flex: 2,
              child: Container(height:5),
            ),
          ],
        ),
      ),
    ),
  );

  runApp(app);
}
