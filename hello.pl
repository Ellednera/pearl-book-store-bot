#!/usr/bin/perl

# Source: https://blog.polettix.it/a-simple-telegram-bot/

use strict;
use warnings;
use 5.010;

use Log::Any::Adapter "Stderr";
use Bot::ChatBots::Telegram::LongPoll;

my $token = $ENV{PEARL};

say "Starting Pearl Book Store Bot...";
my $lp = Bot::ChatBots::Telegram::LongPoll->new(
  token => $token,
  processor => \&give_response,
  start => 1,
);

sub give_response {
  my $record = shift;
  my $text = $record->{payload}{text};
  say "Received: ", $text;

  # can only send once, this is a hash key we're setting
#  if ($text =~ /hello/i) {
  if ($text eq "Hello") {
    $record->{send_response} = "Hello, I'm Pearl.";
  } elsif ( $text eq "Bye" ) {
    # this part is not working for whatever reason
    # only the first if works, hmm...
    $record->{send_message} = "Bye bye~";
  }
  
  return $record
}


# besiyata d'shmaya
