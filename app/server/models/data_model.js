class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                return this.data[i];

            }
        }

        return null;
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {

        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                let objKeys = Object.keys(obj);
                for (var _keys = 0; _keys < objKeys.length; _keys++) {
                    this.data[i][objKeys[_keys]] = obj[objKeys[_keys]];
                }

                return true;
            }
        }

        return false;
    }

    delete(id) {

        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                const arrIndex = this.data.indexOf(this.data[i]);
                if (arrIndex > -1) {
                    this.data.splice(arrIndex, 1);
                }
                // delete this.data[i];
                return true;
            }
        }

        return false;
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;