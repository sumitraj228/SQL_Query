//! ================================== task 1 ======================================
//? Basic sql query


//todo 1. WRITE A QUERY TO DISPLAY ALL THE DETAILS FROM THE EMPLOYEE TABLE
//        select * from emp; 


//todo 2.WAQTD NAMES OF ALL THE EMPLOYEES.
//      select ename from emp;


//todo 3.WAQTD NAME AND SALARY GIVEN TO ALL THE EMPLOYEES.
//       select ename, sal from emp;


//todo 4.WAQTD NAME AND COMMISSION GIVEN TO ALL THE EMPLOYEES.
//      select ename, comm from emp;


//todo 5.WAQTD EMPLOYEE ID AND DEPARTMENT NUMBER OF ALL THE EMPLOYEES IN EMP TABLE
//       select empno, deptno from emp;


//todo 6. WAQTD ENAME AND HIREDATE OF ALL THE EMPLOYEES
//        select ename, hiredate from emp;


//todo 7.WAQTD NAME AND DESIGNATION OF ALL THE EMPLPOYEES
//       select ename, job from emp;


//todo 8. WAQTD NAME, JOB AND SALARY GIVEN ALL THE EMPLOYEES.
//        select ename, job, sal from emp;


//todo 9. WAQTD DNAMES PRESENT IN DEPARTMENT TABLE
//        select dname from dept;


//todo 10. WAQTD DNAME AND LOCATION PRESENT IN DEPT TABLE.
//         select dname, loc from dept;





















//!==================================== task 2 =========================================
//? Expression in Select Clause


//todo 1. WAQTD NAME OF THE EMPLOYEE ALONG WITH THEIR ANNUAL SALARY.
//        select ename, sal*12 from emp;


//todo 2.WAQTD ENAME AND JOB FOR ALL THE EMPLOYEE WITH THEIR HALF TERM SALARY.
//       select ename, job, sal*6 from emp;


//todo 3.WAQTD ALL THE DETAILS OF THE EMPLOYEES ALONG WITH AN ANNUAL BONUS OF 2000. 
//       select emp.*, sal+2000 from emp;


//todo 4.WAQTD NAME SALARY AND SALARY WITH A HIKE OF 10% 
//      select ename, sal, sal+(sal*0.1) from emp;


//todo 5.WAQTD NAME AND SALARY WITH DEDUCTION OF 25%
//      select ename, sal-(sal*25/100) from emp;


//todo 6.WAQTD NAME AND SALARY WITH MONTHLY HIKE OF 50.
//       select ename, sal+50 from emp;


//todo 7.WAQTD NAME AND ANNUAL SALARY WITH DEDUCTION OF 10% 
//      select ename, sal*12-(sal*0.1)) from emp;


//todo 8.WAQTD TOTAL SALARY GIVEN TO EACH EMPLOYEE(SAL-COMM)
//       select sal+comm as total_salary from emp;


//todo 9.WAQTD DETAILS OF ALL THE EMPLOYEES ALONG WITH ANNUAL SALARY.
//      select emp.*, sal*12 "ANNUAL SALARY" from emp; 


//todo 10. WAQTD NAME AND DESIGNATION ALONG WITH 100 PENALTY IN SALARY.
//         select ename, job, sal-100 penality from emp;




















//!==================================== task 3 =========================================
//? WHERE Clause


//todo 1. WAQTD THE ANNUAL SALARY OF THE EMPLOYEE WHOS NAME IS SMITH
// select ename
// from emp
// where ename ='SMITH';





//todo 2. WAQTD NAME OF THE EMPLOYEES WORKING AS CLERK
// select ename
// from emp 
// where job='CLERK';






//todo 3.WAQTD SALARY OF THE EMPLOYEES WHO ARE WORKING AS SALESMAN
// select sal
// from emp
// where job='SALESMAN';






//todo 4.WAQTD DETAILS OF THE EMP WHO EARNS MORE THAN 2000
// select emp.*
// from emp
// where sal>=2000;






//todo 5.WAQTD DETAILS OF THE EMP WHOS NAME IS JONES
// select emp.*
// from emp
// where ename ='JONES';






//todo 6.WAQTD DETAILS OF THE EMP WHO WAS HIRED AFTER 01-JAN-81
// select emp.*
// from emp
// where hiredate >= '01-JAN-81';






//todo 7.WAQTD NAME AND SAL ALONG WITH HIS ANNUAL SALARY IF THE ANNUAL SALARY IS MORE THAN 12000
// select ename, sal, sal*12
// from emp
// where sal*12>=12000;






//todo 8.WAQTD EMPNO OF THE EMPLOYEES WHO ARE WORKING IN DEPT 30
// select empno 
// from emp
// where deptno ='30';





//todo 9. WAQTD ENAME AND HIREDATE IF THEY ARE HIRED BEFORE 1981
// select ename, hiredate
// from emp
// where hiredate<='1-JAN-81';






















//!==================================== task 4 =========================================
//? Logical operator in where clause(and , or)


//todo 1. WAQTD DETAILS OF THE EMPLOYEES WORKING AS CLERK AND EARNING LESS THAN 1500
// select *
// from emp
// where job ='CLERK' and sal<1500;




//todo 2. WAQTD NAME AND HIREDATE OF THE EMPLOYEES WORKING AS MANAGER IN DEPT 30
// select ename, hiredate
// from emp 
// where job='MANAGER' and deptno=30;




//todo 3. WAQTD DETAILS OF THE EMP ALONG WITH ANNUAL SALARY IF THEY ARE WORKING IN DEPT 30 AS SALESMAN AND THEIR ANNUAL SALARY HAS TO BE GREATER THAN 14000.
// select emp.*, sal*12 as AnnualSalary
// from emp
// where deptno=30 and job='SALESMAN' and sal*12>14000;




//todo 4.WAQTD ALL THE DETAILS OF THE EMP WORKING IN DEPT 30 OR AS ANALYST
// select *
// from emp
// where deptno=30 or job='ANALYST';




//todo 5.WAQTD NAMES OF THE EMPMLOYEES WHOSE SALARY IS LESS THAN 1100 AND THEIR DESIGNATION IS CLERK
// select ename
// from emp
// where sal<1100 and job='CLERK';




//todo 6. WAQTD NAME AND SAL, ANNUAL SAL AND DEPTNO IF DEPTNO IS 20 EARNING MORE THAN 1100 AND ANNUAL SALARY EXCEEDS 12000 
// select ename, sal, sal*12 AnnualSal, deptno 
// from emp 
// where deptno=20 and sal>1100 and sal*12>12000;




//todo 7. WAQTD EMPNO AND NAMES OF THE EMPLOYEES WORKING AS MANAGER IN DEPT 20
// select empno, ename
// from emp
// where job='MANAGER' and deptno=20;




//todo 8. WAQTD DETAILS OF EMPLOYEES WORKING IN DEPT 20 OR 30
// select *
// from emp
// where deptno=30 or deptno=20;




//todo 9.WAQTD DETAILS OF EMPLOYEES WORKING AS ANALYST IN DEPT 10.
// select * 
// from emp
// where job='ANALYST' and deptno=10;




//todo 10.WAQTD DETAILS OF EMPLOYEE WORKING AS PRESIDENT WITH SALARY OF RUPEES 4000 
// select *
// from emp
// where job='PRESIDENT' and sal=4000;




//todo 11.WAQTD NAMES AND DEPTNO, JOB OF EMPS WORKING AS CLERK IN DEPT 10 OR 20
// select ename, deptno
// from emp
// where job='CLERK' and (deptno=10 or deptno=30);




//todo 12.WAQTD DETAILS OF EMPLOYEES WORKING AS CLERK OR MANAGER IN DEPT 10.
// select *
// from emp 
// where job='CLERK' and deptno=10 or job='MANAGER' and deptno=10;




//todo 13.WAQTD NAMES OF EMPLOYEES WORKING IN DEPT 10,20,30,40
// select ename 
// from emp
// where deptno=10 or deptno=20 or deptno=30 or deptno=40;




//todo 14.WAQTD DETAILS OF EMPLOYEES WITH EMPNO 7902,7839.
// select *
// from emp
// where empno=7902 or empno=7839;




//todo 15.WAQTD DETAILS OF EMPLOYEES WORKING AS MANAGER OR SALESMAN OR CLERK
// select *
// from emp
// where job in ('MANAGER','SALESMAN','CLERK');




//todo 16.WAQTD NAMES OF EMPLOYEES HIRED AFTER 81 AND BEFORE 87
// select ename 
// from emp 
// where hiredate>'31-DEC-81' and hiredate<'01-JAN-87';




//todo 17.WAQTD DETAILS OF EMPLOYERS EARNING MORE THAN 1250 BUT LESS THAN 3000
// select *
// from emp
// where sal>1250 and sal<3000;





//todo 18.WAQTD NAMES OF EMPLOYEES HIRED AFTER 81 INTO DEPT 10 OR 30
// select ename
// from emp
// where hiredate>'31-DEC-81'and (deptno=10 or deptno=30);





//todo 19. WAQTD NAMES OF EMPLOYEES ALONG WITH ANNUAL SALARY FOR THE EMPLOYEES WORKING AS MANAGER OR CLERK INTO DEPT 10 OR 30
// select ename, sal*12 Annual_Salary
// from emp
// where (job='MANAGER' or job='CLERK') and (deptno=10 or deptno=30);




//todo 20.WAQTD ALL THE DETAILS ALONG WITH ANNUAL SALARY IF SAL IS BETWEEN 1000 AND 4000 ANNUAL SALARY MORE THAN 15000
// select emp.*, sal*12 AnnualSal
// from emp
// where (sal>1000 and sal<4000) and sal*12>15000;





























//! ========================================= Task 5 =======================================================
//? Special operator

//todo 1) LIST ALL THE EMPLOYEES WHOSE COMMISSION IS NULL
// select * 
// from emp 
// where comm is null;




//todo 2) LIST ALL THE EMPLOYEES WHO DON'T HAVE A REPORTING MANAGER
// select * 
// from emp
// where mgr is null;




//todo 3) LIST ALL THE SALESMEN IN DEPT 30
// select *
// from emp
// where job='SALESMAN' and deptno=30;




//todo 4) LIST ALL THE SALESMEN IN DEPT NUMBER 30 AND HAVING SALARY GREATER THAN 1500
// select *
// from emp
// where job='SALESMAN' and deptno=30 and sal>1500;




//todo 5) LIST ALL THE EMPLOYEES WHOSE NAME STARTS WITH 'S' OR 'A'
// select *
// from emp
// where ename like 'S%' or ename like'A%';




//todo 6) LIST ALL THE EMPLOYEES EXCEPT THOSE WHO ARE WORKING IN DEPT 10 & 20.
// select *
// from emp  
// where deptno not in (10,20);




//todo 7) LIST THE EMPLOYEES WHOSE NAME DOES NOT START WITH 'S'
// select *
// from emp
// where ename not like 'S%';




//todo 8) LIST ALL THE EMPLOYEES WHO ARE HAVING REPORTING MANAGERS IN DEPT 10
// select * 
// from emp
// where mgr is not null and deptno=10;




//todo 9) LIST ALL THE EMPLOYEES WHOSE COMMISSION IS NULL AND WORKING AS CLERK
// select *
// from emp
// where job='CLERK' and comm is null;




//todo 10) LIST ALL THE EMPLOYEES WHO DON'T HAVE A REPORTING MANAGER IN DEPTNO 10 OR 30
// select *
// from emp
// where mgr is not null and deptno in (10,30);




//todo 11) LIST ALL THE SALESMEN IN DEPT 30 WITH SAL MORE THAN 2450
// select *
// from emp
// where job='SALESMAN' and deptno=30 and sal>2450;




//todo 12) LIST ALL THE ANALYST IN DEPT NUMBER 20 AND HAVING SALARY GREATER THAN 2500
// select *
// from emp
// where job='ANALYST' and deptno=20 and sal>2500;




//todo 13) LIST ALL THE EMPLOYEES WHOSE NAME STARTS WITH 'M' OR 'J'
// select *
// from emp
// where ename like 'M%' or ename like 'J%';




//todo 14) LIST ALL THE EMPLOYEES WITH ANNUAL SALARY EXCEPT THOSE WHO ARE WORKING IN DEPT 30
// select emp.*, sal*12 annualSal
// from emp
// where deptno not in 30;




//todo 15) LIST THE EMPLOYEES WHOSE NAME DOES NOT END WITH 'ES' OR 'R'
// select *
// from emp
// where ename not like '%ES' and ename not like '%R';




//todo 16) LIST ALL THE EMPLOYEES WHO ARE HAVING REPORTING MANAGERS IN DEPT 10 ALONG WITH 10% HIKE IN SALARY
// select emp.*, sal+sal*0.1
// from emp 
// where mgr is not null and deptno= 10;




//todo 17) DISPLAY ALL THE EMPLOYEE WHO ARE 'SALESMAN'S HAVING 'E' AS THE LAST BUT ONE CHARACTER IN ENAME BUT SALARY HAVING EXACTLY 4 CHARACTER
// select *
// from emp
// where job='SALESMAN' and ename like '%E_' and sal like '____';




//todo 18) DISPLAY ALL THE EMPLOYEE WHO ARE JOINED AFTER YEAR 81
// select *
// from emp
// where hiredate> '31-DEC-81';




//todo 19) DISPLAY ALL THE EMPLOYEE WHO ARE JOINED IN FEB
// select *
// from emp
// where hiredate like '%FEB%';




//todo 20) LIST THE EMPLOYEES WHO ARE NOT WORKING AS MANAGERS AND CLERKS IN DEPT 10 AND 20 WITH A SALARY IN THE RANGE OF 1000 T0 3000.
// select *
// from emp
// where job not in ('MANAGER', 'CLERK') and deptno not in(10,20) and sal between 1000 and 3000;


























//! ========================================= Task 6 =======================================================
//? Multi row Function (min, max, sum, avg, count)


// todo 1. WAQTD NUMBER OF EMPLOYEES GETTING SALARY LESS THAN 2000 IN DEPTNO 10
// select count(*)
// from emp 
// where sal<2000 and deptno=10;




// todo 2. WAQTD TOTAL SALARY NEEDED TO PAY EMPLOYEES WORKING AS CLERK
// select sum(sal)
// from emp
// where job='CLERK';





// todo 3. WAQTD AVERAGE SALARY NEEDED TO PAY ALL EMPLOYEES
// select avg(sal)
// from emp;




// todo 4. WAQTD NUMBER OF EMPLOYEES HAVING 'A' AS THEIR FIRST CHARACTER
// select count(*)
// from emp
// where ename like 'A%';





// todo 5. WAQTD NUMBER OF EMPLOYEES WORKING AS CLERK OR MANAGER
// select count(*)
// from emp
// where job in('CLERK','MANAGER');





// todo 6. WAQTD TOTAL SALARY NEEDED TO PAY EMPLOYEES HIRED IN FEB
// select sum(sal)
// from emp
// where hiredate like '%FEB%';





// todo 7. WAQTD NUMBER OF EMPLOYEES REPORTING TO 7839 (MGR)
// select count(*)
// from emp
// where mgr=7839;





// todo 8.  WAQTD NUMBER OF EMPLOYEES GETTING COMISSION IN DEPTNO 30
// select count(*)
// from emp
// where comm is not null and deptno=30;




// todo 9. WAQTD AVG SAL, TOTAL SAL, NUMBER OF EMPS AND MAXIMUM SALARY GIVEN TO EMPLOYEES WORKING AS PERSIDENT
// select avg(sal), sum(sal), count(*), max(sal)
// from emp
// where job='PRESIDENT';




// todo 10. WAQTD NUMBER OF EMPLOYEES HAVING 'A' IN THEIR NAMES
// select count (*)
// from emp
// where ename like '%A%';































//! ========================================= Task 7 =======================================================
//? Group by Clause


//todo 1. WAQTD NUMBER OF EMPLOYEES WORKING IN EACH DEPARTEMENT EXCEPT PRESIDENT
// select Count (*),deptno 
// from emp 
// where job not in 'PRESIDENT'
// group by deptno;





//todo 2. WAQTD TOTAL SALARY NEEDED TO PAY ALL THE EMPLOYEES IN EACH JOB
// select sum(sal),job
// from emp
// group by job;





//todo 3. WAQTD NUMBER OF EMPLOYEEES WORKING AS MANAGER IN EACH DEPARTMENT
// select count(*)
// from emp
// where job='MANAGER'
// group by deptno;




//todo 4.vWAQTD AVG SALARY NEEDED TO PAY ALL THE EMPLOYEES IN EACH DEPARTMENT EXCLUDING THE EMPLOYEES OF DEPTNO 20
// select avg(sal),deptno
// from emp
// where deptno not in 20
// group by deptno;




//todo 5. WAQTD NUMBER OF EMPLOYEES HAVING CHARACTER 'A' IN THEIR NAMES IN EACH JOB
// select count(*),job
// from emp
// where ename like '%A%'
// group by job;




//todo 6. WAQTD NUMBER OF EMPLOYEES AND AVG SALARY NEEDED TO PAY THE EMPLOYEES WHO SALARY IN GREATER THAN 2000 IN EACH DEPT
// select count(*), avg(sal)
// from emp
// where sal>2000
// group by deptno;




//todo 7. WAQDTD TOTAL SALARY NEEDED TO PAY AND NUMBER OF SALESMANS IN EACH DEPT
// select sum(sal),count(*),deptno
// from emp
// where job='SALESMAN'
// group by deptno;




//todo 8. WAQTD NUMBER OF EMPLOYEES WITH THEIR MAXIMUM SALARIES IN EACH JOB
// select count(*), max(sal),job
// from emp
// group by job;




//todo 9. WAQTD MAXIMUM SALARIES GIVEN TO AN EMPLOYEE WORKING IN EACH DEPT.
// select max(sal),deptno
// from emp
// group by deptno;




// todo10. WAQTD NUMBER OF TIMES THE SALARIES PRESENT IN EMPLOYEE TABLE
// select count(sal)
// from emp;
























//! ========================================= Task 8 =======================================================
//? Having clause

//todo 1. WAQTD DNO AND NUMBER OF EMP WORKING IN EACH DEPT IF THERE ARE ATLEAST 2 CLERKS IN EACH DEPT
// select deptno, count(*)
// from emp 
// where job='CLERK'
// group by deptno
// having count(*)>2;




//todo 2. WAQTD DNO AND TOTAL SAALARY EARNED TO PAY ALL EMP IN EACH DEPT IF THERE ARE ATLEAST 4 EMP IN EACH DEPT 
// select deptno,  sum(sal)
// from emp
// group by deptno
// having count(*)>4;




//todo 3.WAQTD NUMBER OF EMP EARNING SAL MORE THAN 1200 IN EACH JOB AND THE TOTAL SAL NEEDED TO PAY EMP OF EACH JOB MUST EXCEEDS 3800
// select count(*)
// from emp
// where sal>1200
// group by job
// having sum(sal)>3800;




//todo 4. WAQTD DEPTNO AND NUMBER OF EMP WORKING ONLY IF THERE ARE 2 EMP WORKING IN EACH DEPT AS MANAGER
// select deptno, count(*)
// from emp
// where job='MANAGER'
// group by deptno
// having count(*)>=2;




//todo 5.WAQTD JOB AND MAX SAL OF EMP IN EACH JOB IF THE MAX SAL EXCEEDS 2600
// select job, max(sal)
// from emp
// group by job
// having max(sal)>2600;




//todo 6. WAQTD THE SALARIES WHICH ARE REPEATED IN EMP TABLE
// select sal
// from emp
// group by sal;
// having count(*)>1;




//todo 7. WAQTD THE HIREDATE WHICH ARE DUPLICATED IN EMP TABLE
// select hiredate
// from emp
// group by hiredate
// having count(*)>1;




//todo 8.WAQTD AVG SALARY OF EACH DEPT IF AVG SAL IS LESS THAN 3000
// select avg(sal)
// from emp
// group by deptno
// having avg(sal)<3000;




//todo 9.WAQTD DEPTNO IF THERE ARE ATLEAST 3 EMP IN EACH DEPT WHOS NAME HAS CHAR 'A' OR 'S'.
// select deptno
// from emp
// where ename like '%A%' or ename like '%S%'
// group by deptno
// having count(*)>=3;




//todo 10.WAQTD MIN AND MAX SALARIES OF EACH JOB IF MIN SAL IS MORE THAN 1000 AND MAX SAL IS LESS THAN 5000.
// select min(sal), max(sal)
// from emp
// group by job
// having min(sal)>1000 and max(sal)<5000;

























//! ========================================= Task 9 =======================================================
//? Sub-Query

//todo 1. WAQTD NAME OF THE EMPLOYEES EARNING MORE THAN ADAMS
// select ename
// from emp
// where sal>
// (select sal
//     from emp
//     where ename like 'ADAMS'
// );




//todo 2. WAQTD NAME AND SALARY OF THE EMPLOYEES EARNING LESS THAN KING
// select ename, sal
// from emp
// where sal<(
//     select sal
//     from emp
//     where ename like 'KING'
// );




//todo 3.WAQTD NAME AND DEPTNO OF THE EMPLOYEES IF THEY ARE WORKING IN THE SAME DEPT AS JONES 
// select ename, deptno
// from emp
// where deptno=(
//     select deptno
//     from emp
//     where ename like 'JONES'
// );




//todo 4. WAQTD NAME AND JOB OF ALL THE EMPLOYEES WORKING IN THE SAME DESIGNATION AS JAMES
// select ename, job
// from emp
// where job=(
//     select job
//     from emp
//     where ename like 'JAMES'
// );




//todo 5. WAQTD EMPNO AND ENAME ALONG WITH ANNUAL SALARY OF ALL THE EMPLOYEES IF THEIR ANNUAL SALARY IS GREATER THAN WARDS ANNUAL SALARY
// select empno, ename , sal*12 AnnualSal
// from emp
// where sal*12>(
//     select sal*12 
//     from emp
//     where ename like 'WARD'
// );




//todo 6. WAQTD NAME AND HIREDATE OF THE EMPLOYEES IF THEY ARE HIRED BEFORE SCOTT
// select ename, hiredate
// from emp
// where hiredate < (
//     select hiredate 
//     from emp
//     where ename like 'SCOTT'
// );




//todo 7.WAQTD NAME AND HIREDATE OF THE EMPLOYEES IF THEY ARE HIRED AFTER THE PRESIDENT
// select ename, hiredate 
// from emp
// where hiredate>(
//     select hiredate 
//     from emp
//     where job='PRESIDENT'
// );




//todo 8. WAQTD NAME AND SAL OF THE EMPLOYEE IF THEY ARE EARNING SAL LESS THAN THE EMPLOYEE WHOSE EMPNO IS 7839 
// select ename, sal
// from emp
// where sal<(
//     select sal 
//     from emp
//     where empno = 7839
// );




//todo 9.WAQTD ALL THE DETAILS OF THE EMPLOYEES IF THE EMPLOYEES ARE HIRED BEFORE MILLER
// select *
// from emp
// where hiredate<(
//     select hiredate 
//     from emp
//     where ename like 'MILLER'
// );




//todo 10. WAQTD ENAME AND EMPNO OF THE EMPLOYEES IF EMPLOYEES ARE EARNING MORE THAN ALLEN
// select ename, empno
// from emp
// where sal>(
//     select sal
//     from emp
//     where ename like 'ALLEN'
// );




//todo 11. WAQTD ENAME AND SALARY OF ALL THE EMPLOYEES WHO ARE EARNING MORE THAN MILLER BUT LESS THAN ALLEN 
// select ename, sal
// from emp
// where sal>(
//     select sal
//     from emp
//     where ename like 'MILLER'
// ) and sal<(
//     select sal
//     from emp
//     where ename like 'ALLEN'
// );






//todo 12.WAQTD ALL THE DETAILS OF THE EMPLOYEES WORKING IN DEPT 20 AND WORKING IN THE SAME DESIGNATION AS SMITH ILBAOTD ALL THE DETAILEGE THEEULOYEEEHORVANDAL