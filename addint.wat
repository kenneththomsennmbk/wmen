(module
  (func(export "addInt")(param $val1 i32)(param $val2 i32)(result i32)
    (i32.add(local.get $val1(local.get $val2))))
  )
