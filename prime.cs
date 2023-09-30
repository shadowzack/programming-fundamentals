/* A prime number is a natural number that has exactly two
 positive divisors: 1 and itself. To check if a number is prime,
  we can use a simple algorithm that iterates through all the possible divisors 
  from 2 to the square root of the number and checks if any of them divides the number evenly. 
If not, the number is prime. Here is a possible C# program that implements this algorithm:
 */
using System;

class Program
{
    // A method that returns true if n is prime, false otherwise
    static bool IsPrime(int n)
    {
        // If n is less than 2, it is not prime
        if (n < 2)
        {
            return false;
        }

        // Check all the possible divisors from 2 to the square root of n
        int limit = (int)Math.Sqrt(n);
        for (int i = 2; i <= n-1; i++)
        {
            // If n is divisible by i, it is not prime
            if (n % i == 0)
            {
                return false;
            }
        }

        // If none of the divisors divided n evenly, it is prime
        return true;
    }

    static void Main(string[] args)
    {
        // Ask the user to enter a number
        Console.Write("Enter a number: ");
        int number = int.Parse(Console.ReadLine());

        // Check if the number is prime and print the result
        bool result = IsPrime(number);
        Console.WriteLine($"{number} is {(result ? "prime" : "not prime")}");
    }
}
