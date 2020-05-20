import { MssqlDb } from '../modules/db1';

class ArticleClass {
    title:string | undefined;
    desc:string | undefined;
    status?:number | undefined;
}
var ArticleModel = new MssqlDb<ArticleClass>();

export { ArticleClass, ArticleModel };