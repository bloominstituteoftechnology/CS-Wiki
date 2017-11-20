OBJS=hello.o

all: hello
.PHONY: all

hello.o: hello.c
	gcc -Wall -c -g $<

hello: $(OBJS)
	gcc -o $@ $^

clean:
	rm -f $(OBJS)
.PHONY: clean