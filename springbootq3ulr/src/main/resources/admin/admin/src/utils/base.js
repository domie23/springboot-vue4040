const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootq3ulr/",
            name: "springbootq3ulr",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootq3ulr/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上图书商城"
        } 
    }
}
export default base
