 f = new Function('return "console.log(\\"hello world\\")"');
 b = f(1);
 h = new Function(f(1))();