### crypto模块计算加密值时，不同node版本有变化，v6之前，字符串默认按照binary处理的，v6之后按照utf-8处理的。

  导致的后果就是v6之前计算的值，例如sha256，跟其他语言计算的不一样。

  为了避免此问题，需要显式传递编码参数，保证结果一致：

  crypto.Hash('sha256').update(param_str, 'utf-8').digest('hex')

  update第二个参数'utf-8'
