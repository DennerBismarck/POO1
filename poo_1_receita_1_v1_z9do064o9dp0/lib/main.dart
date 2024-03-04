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
      appBar: AppBar(title: Text("Meu app")),
      body: Center(
        child: Column(
          children: [
            Text("Olá, Mundo!", style: TextStyle(fontWeight: FontWeight.bold)),
            Text("Eu sou....", style: TextStyle(color: Colors.grey, fontStyle: FontStyle.italic)),
            Text("O Multiplexador!", style: TextStyle(color: Colors.red, fontSize: 20, fontWeight: FontWeight.bold)),
            FadeInImage.memoryNetwork(
              placeholder: kTransparentImage,
              image: 'https://media.licdn.com/dms/image/C5603AQFhgkL5PIZ8qA/profile-displayphoto-shrink_800_800/0/1516962295674?e=2147483647&v=beta&t=ldiDo5sSXTclRpZYb0H4n5aA4ECNm9vlSqrf1WjO8PE'
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        child: Row(
          children: [
            Expanded(
              flex: 2,
              child: Container(height:5),
            ),
            ElevatedButton(child: 
              Text("Fabrício"),
              onPressed: null,
            ),
            ElevatedButton(child: 
              Text("Luiz Paulo"),
              onPressed: null,
            ),
            ElevatedButton(child: 
              IconButton(
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
