var hcltojson = require('hcl-to-json')
 
const first_config = `
variable user {
    name = "dlaong"
    age =44
}
`

const platform_config = `

resource k8s_app_config tennant_110 {
    network_interface = "0.0.0.0"
    networktype = "local"
    config_content = << JSON
         {
            name:"dalong",
            age:4344,
            type: "system"
         }         
    JSON
}

`
const second_config = `
foo "bar" {
    baz = 123
    tex = ["one", "two"]
    mon "test" {
      lar = "bar"
    }
  }
`
var result = hcltojson(platform_config)

//var info = result.resource.k8s_app_config.tennant_110.config_content

//console.log(info)

console.log(JSON.stringify(result))