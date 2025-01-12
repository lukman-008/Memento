import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: false,
        toolbarHeight: 80,
        backgroundColor: const Color.fromARGB(255, 0, 0, 0),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Momento',
              style: TextStyle(
                fontFamily: 'Roboto',
                color: Color.fromARGB(255, 255, 255, 255),
                fontStyle: FontStyle.normal,
                fontWeight: FontWeight.bold,
                fontSize: 24,
              ),
            ),
          ],
        ),
        actions: [
          Container(
            padding: const EdgeInsets.fromLTRB(0, 2, 0, 0),
            child: Stack(
              children: <Widget>[
                IconButton(
                  onPressed: () {},
                  icon: const Icon(
                    Icons.notifications,
                    color: Color.fromARGB(255, 255, 255, 255),
                    size: 30,
                  ),
                ),
                const Positioned(
                  left: 24,
                  child: CircleAvatar(
                    radius: 10,
                    backgroundColor: Colors.green,
                    child: Text("1"),
                  ),
                ),
              ],
            ),
          )
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  for (int i = 0; i < 5; i++)
                    InkWell(
                        onTap: () {
                          setState(() {});
                        },
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
                            color: const Color.fromARGB(255, 0, 0, 0),
                          ),
                          padding: const EdgeInsets.all(5),
                          margin: const EdgeInsets.symmetric(
                              vertical: 10, horizontal: 5),
                          height: 200,
                          width: 150,
                          child: Column(
                            children: [
                              Image.network(
                                "https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510024_1280.png",
                                fit: BoxFit.cover,
                              ),
                              SizedBox(
                                height: 10,
                              ),
                              Text(
                                "My Moments",
                                style: TextStyle(
                                    fontSize: 20, color: Colors.white),
                              )
                            ],
                          ),
                        )),
                ],
              ),
            ),
            SizedBox(
              height: 10,
            ),
            SingleChildScrollView(
              scrollDirection: Axis.vertical,
              child: Column(
                children: [
                  for (int i = 0; i < 5; i++)
                    InkWell(
                        onTap: () {
                          setState(() {});
                        },
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
                            color: const Color.fromARGB(255, 0, 0, 0),
                          ),
                          padding: const EdgeInsets.all(5),
                          margin: const EdgeInsets.symmetric(
                              vertical: 10, horizontal: 5),
                          height: 400,
                          width: double.infinity,
                          child: Image.network(
                            "https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510024_1280.png",
                            fit: BoxFit.cover,
                          ),
                        )),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
