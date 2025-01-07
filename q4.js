function Student(name, branchName, marks) {
    this.name = name;
    this.branchName = branchName;
    this.marks = marks;


        this.study = () => {
            return `${this.name} is studying in ${this.branchName} branch`;
        }

        this.getGrade = () => {
            return `${this.name} has got ${this.marks} marks`;
        }
    }
    let student1 = new Student("John", "CSE", 80);
    console.log(student1.study());
    console.log(student1.getGrade());
    
    let student2 = new Student("Jane", "ECE", 90);
    console.log(student2.study());
    console.log(student2.getGrade());