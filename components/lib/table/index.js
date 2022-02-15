import table from './src/Table.vue';
import col from './src/TableCol.vue';

const Table = {
    install:(app)=>{
        app.component(table.name,table);
        app.component(col.name,col);
    }
}
export default Table;