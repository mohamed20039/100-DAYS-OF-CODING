#include<iostream>

using namespace std;

int main(){
	int n{0};
	
	cout<<"N\tN*10\tN*100\tN*1000"<<endl;
	
	while (++n <= 5) {
	cout << n << '\t' << 10 * n << '\t' << 100 * n
	<< '\t' << 1000 * n << '\n';
	}
	cout << endl;
}

