/*
 * Author: Barış Demirezen
 */
package com.mycompany.mavenproject4;

import java.util.Random;
import java.util.Scanner;

public class Main {

  public static String numToName(int numberx) {
    switch (numberx) {
    case 0:
      return "Taş";
    case 1:
      return "Kağıt";
    case 2:
      return "Makas";
    default:
      return "Error";
    }
  }

  public static int getGesture() {

    Random rand = new Random();
    int randNum = rand.nextInt(3);
    return randNum;
  }
  public static int userPlayed(char X) {
    int returnNum;
    switch (X) {
    case 'T':
    case 't':
      returnNum = 0;
      break;
    case 'K':
    case 'k':
      returnNum = 1;
      break;
    case 'M':
    case 'm':
      returnNum = 2;
      break;
    default:
      returnNum = 9;
    }
    return returnNum;
  }

  public static void checkWin(int user, int pc) {

    int[][] winnerTable = new int[3][3];

    winnerTable[0][0] = 0;
    winnerTable[0][1] = 2;
    winnerTable[0][2] = 1;
    winnerTable[1][0] = 1;
    winnerTable[1][1] = 0;
    winnerTable[1][2] = 2;
    winnerTable[2][0] = 2;
    winnerTable[2][1] = 1;
    winnerTable[2][2] = 0;

    int winner = winnerTable[user][pc];
    switch (winner) {
    case 0:
      System.out.println("Berabere!");
      break;
    case 1:
      System.out.println("Sen Kazandın!");
      break;
    case 2:
      System.out.println("Bilgisayar Kazandı!");
      break;
    }
  }

  public static void main(String[] args) {

    Scanner scanner = new Scanner(System. in );
    char G = scanner.next().charAt(0);
    int userPlayed = userPlayed(G);
    int pcPlayed = getGesture();
    System.out.println("Sizin oynadığınız: " + numToName(userPlayed));
    System.out.println("Rakibinizin oynadığı: " + numToName(pcPlayed));

    checkWin(userPlayed, pcPlayed);

  }

}