// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const framework = flutter_sdk.src__widgets__framework;
  const bottom_navigation_bar = flutter_sdk.src__material__bottom_navigation_bar;
  const bottom_navigation_bar_item = flutter_sdk.src__widgets__bottom_navigation_bar_item;
  const icon = flutter_sdk.src__widgets__icon;
  const icon_data = flutter_sdk.src__widgets__icon_data;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const list_tile = flutter_sdk.src__material__list_tile;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const divider = flutter_sdk.src__material__divider;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextAndintToListTile: () => (T.BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    JSArrayOfMapOfString$String: () => (T.JSArrayOfMapOfString$String = dart.constFn(_interceptors.JSArray$(T.MapOfString$String())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Dicas"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 61288
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: null,
        [Icon_icon]: C[5] || CT.C5
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Cafés",
        [BottomNavigationBarItem_activeIcon]: C[4] || CT.C4,
        [BottomNavigationBarItem_icon]: C[4] || CT.C4
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 61817
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: null,
        [Icon_icon]: C[8] || CT.C8
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Cervejas",
        [BottomNavigationBarItem_activeIcon]: C[7] || CT.C7,
        [BottomNavigationBarItem_icon]: C[7] || CT.C7
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 61563
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: null,
        [Icon_icon]: C[11] || CT.C11
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Nações",
        [BottomNavigationBarItem_activeIcon]: C[10] || CT.C10,
        [BottomNavigationBarItem_icon]: C[10] || CT.C10
      });
    },
    get C2() {
      return C[2] = dart.constList([C[3] || CT.C3, C[6] || CT.C6, C[9] || CT.C9], bottom_navigation_bar_item.BottomNavigationBarItem);
    }
  }, false);
  var C = Array(12).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.deepPurple}), debugShowCheckedModeBanner: false, home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[1] || CT.C1}), body: new main.DataBodyWidget.new({objects: main.dataObjects, columnNames: T.JSArrayOfString().of(["Nome", "Estilo", "IBU"]), propertyNames: T.JSArrayOfString().of(["name", "style", "ibu"])}), bottomNavigationBar: new main.NewNavBar.new()})});
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  var BottomNavigationBarItem_tooltip = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.tooltip");
  var BottomNavigationBarItem_backgroundColor = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.backgroundColor");
  var BottomNavigationBarItem_label = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.label");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_opticalSize = dart.privateName(icon, "Icon.opticalSize");
  var Icon_grade = dart.privateName(icon, "Icon.grade");
  var Icon_weight = dart.privateName(icon, "Icon.weight");
  var Icon_fill = dart.privateName(icon, "Icon.fill");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var BottomNavigationBarItem_activeIcon = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.activeIcon");
  var BottomNavigationBarItem_icon = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.icon");
  main.NewNavBar = class NewNavBar extends framework.StatelessWidget {
    build(context) {
      function botaoFoiTocado(index) {
        core.print("Tocaram no botão " + dart.str(index));
      }
      dart.fn(botaoFoiTocado, T.intTovoid());
      return new bottom_navigation_bar.BottomNavigationBar.new({onTap: botaoFoiTocado, items: C[2] || CT.C2});
    }
    static ['_#new#tearOff']() {
      return new main.NewNavBar.new();
    }
  };
  (main.NewNavBar.new = function() {
    main.NewNavBar.__proto__.new.call(this);
    ;
  }).prototype = main.NewNavBar.prototype;
  dart.addTypeTests(main.NewNavBar);
  dart.addTypeCaches(main.NewNavBar);
  dart.setMethodSignature(main.NewNavBar, () => ({
    __proto__: dart.getMethods(main.NewNavBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.NewNavBar, I[0]);
  var objects$ = dart.privateName(main, "DataBodyWidget.objects");
  var columnNames$ = dart.privateName(main, "DataBodyWidget.columnNames");
  var propertyNames$ = dart.privateName(main, "DataBodyWidget.propertyNames");
  main.DataBodyWidget = class DataBodyWidget extends framework.StatelessWidget {
    get objects() {
      return this[objects$];
    }
    set objects(value) {
      super.objects = value;
    }
    get columnNames() {
      return this[columnNames$];
    }
    set columnNames(value) {
      super.columnNames = value;
    }
    get propertyNames() {
      return this[propertyNames$];
    }
    set propertyNames(value) {
      super.propertyNames = value;
    }
    static ['_#new#tearOff'](opts) {
      let objects = opts && 'objects' in opts ? opts.objects : null;
      let columnNames = opts && 'columnNames' in opts ? opts.columnNames : null;
      let propertyNames = opts && 'propertyNames' in opts ? opts.propertyNames : null;
      return new main.DataBodyWidget.new({objects: objects, columnNames: columnNames, propertyNames: propertyNames});
    }
    build(context) {
      return new scroll_view.ListView.builder({itemCount: this.objects[$length], itemBuilder: dart.fn((context, index) => {
          let obj = this.objects[$_get](index);
          return new list_tile.ListTile.new({title: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
                let t0 = T.JSArrayOfWidget().of([]);
                for (let i = 0; i < this.columnNames[$length]; i = i + 1)
                  t0.push(new text.Text.new(this.columnNames[$_get](i) + ": " + dart.str(obj[$_get](this.propertyNames[$_get](i)))));
                t0.push(new divider.Divider.new());
                return t0;
              })()})});
        }, T.BuildContextAndintToListTile())});
    }
  };
  (main.DataBodyWidget.new = function(opts) {
    let objects = opts && 'objects' in opts ? opts.objects : null;
    let columnNames = opts && 'columnNames' in opts ? opts.columnNames : null;
    let propertyNames = opts && 'propertyNames' in opts ? opts.propertyNames : null;
    this[objects$] = objects;
    this[columnNames$] = columnNames;
    this[propertyNames$] = propertyNames;
    main.DataBodyWidget.__proto__.new.call(this);
    ;
  }).prototype = main.DataBodyWidget.prototype;
  dart.addTypeTests(main.DataBodyWidget);
  dart.addTypeCaches(main.DataBodyWidget);
  dart.setMethodSignature(main.DataBodyWidget, () => ({
    __proto__: dart.getMethods(main.DataBodyWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.DataBodyWidget, I[0]);
  dart.setFieldSignature(main.DataBodyWidget, () => ({
    __proto__: dart.getFields(main.DataBodyWidget.__proto__),
    objects: dart.finalFieldType(core.List$(core.Map$(core.String, core.String))),
    columnNames: dart.finalFieldType(core.List$(core.String)),
    propertyNames: dart.finalFieldType(core.List$(core.String))
  }));
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  dart.defineLazy(main, {
    /*main.dataObjects*/get dataObjects() {
      return T.JSArrayOfMapOfString$String().of([new (T.IdentityMapOfString$String()).from(["name", "La Fin Du Monde", "style", "Bock", "ibu", "65"]), new (T.IdentityMapOfString$String()).from(["name", "Sapporo Premiume", "style", "Sour Ale", "ibu", "54"]), new (T.IdentityMapOfString$String()).from(["name", "Duvel", "style", "Pilsner", "ibu", "82"]), new (T.IdentityMapOfString$String()).from(["name", "Guinness Draught", "style", "Stout", "ibu", "45"]), new (T.IdentityMapOfString$String()).from(["name", "Heineken", "style", "Pale Lager", "ibu", "23"]), new (T.IdentityMapOfString$String()).from(["name", "Sierra Nevada Pale Ale", "style", "Pale Ale", "ibu", "38"]), new (T.IdentityMapOfString$String()).from(["name", "Chimay Blue", "style", "Belgian Strong Ale", "ibu", "30"]), new (T.IdentityMapOfString$String()).from(["name", "Pliny the Elder", "style", "Double IPA", "ibu", "100+"]), new (T.IdentityMapOfString$String()).from(["name", "Weihenstephaner Hefeweissbier", "style", "Hefeweizen", "ibu", "14"]), new (T.IdentityMapOfString$String()).from(["name", "Samuel Adams Boston Lager", "style", "Vienna Lager", "ibu", "30"]), new (T.IdentityMapOfString$String()).from(["name", "Founders Breakfast Stout", "style", "Imperial Stout", "ibu", "60"]), new (T.IdentityMapOfString$String()).from(["name", "Rochefort 10", "style", "Quadrupel", "ibu", "27"])]);
    },
    set dataObjects(value) {}
  }, false);
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;;;;;;;;;;;;;UC/C4B;AACxB,YAAO,iCACE,yCAAgC,wDACX,aACtB,mCACI,sDAGF,sCACK,+BACI,wBAAC,QAAQ,UAAU,wBACjB,wBAAC,QAAQ,SAAS,gCAEd;IAG3B;;;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,eAAK,eAAmB;AACU,QAAhC,WAAM,AAAyB,+BAAN,KAAK;;;AAGhC,YAAO,2DACE,cAAc;IAgBzB;;;;;;;;EACF;;;;;;;;;;;;IAGkC;;;;;;IACb;;;;;;IACA;;;;;;;;;;;;UASO;AACxB,YAAgB,8CACH,AAAQ,oCACN,SAAc,SAAa;AAClC,oBAAM,AAAO,oBAAC,KAAK;AACvB,gBAAO,oCACE,0CACkC,yCAC7B;;AACR,yBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAY,2BAAQ,IAAA,AAAC,CAAA;AACvC,4CAAQ,AAAW,AAA+B,wBAA9B,CAAC,IAAE,gBAAI,AAAG,GAAA,QAAC,AAAa,0BAAC,CAAC;AAChD;;;;IAMZ;;;QAvBgB;QACA;QACA;IAFA;IACA;IACA;AAHhB;;EAIE;;;;;;;;;;;;;;;AA5Da,IAAf,eAAO;EACT;;MAkFI,gBAAW;YAAG,qCAChB,2CAAC,QAAQ,mBAAmB,SAAS,QAAQ,OAAO,QACpD,2CAAC,QAAQ,oBAAoB,SAAS,YAAY,OAAO,QACzD,2CAAC,QAAQ,SAAS,SAAS,WAAW,OAAO,QAC7C,2CAAC,QAAQ,oBAAoB,SAAS,SAAS,OAAO,QACtD,2CAAC,QAAQ,YAAY,SAAS,cAAc,OAAO,QACnD,2CAAC,QAAQ,0BAA0B,SAAS,YAAY,OAAO,QAC/D,2CAAC,QAAQ,eAAe,SAAS,sBAAsB,OAAO,QAC9D,2CAAC,QAAQ,mBAAmB,SAAS,cAAc,OAAO,UAC1D,2CAAC,QAAQ,iCAAiC,SAAS,cAAc,OAAO,QACxE,2CAAC,QAAQ,6BAA6B,SAAS,gBAAgB,OAAO,QACtE,2CAAC,QAAQ,4BAA4B,SAAS,kBAAkB,OAAO,QACvE,2CAAC,QAAQ,gBAAgB,SAAS,aAAa,OAAO;;;;;EC3FhC","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map