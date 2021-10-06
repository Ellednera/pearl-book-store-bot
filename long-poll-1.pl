#!/usr/bin/perl

# taken from: https://metacpan.org/dist/Bot-ChatBots-Telegram/view/lib/Bot/ChatBots/Telegram/Guide/Tutorial.pod

use strict;
use warnings;
use 5.010;

use Bot::ChatBots::Telegram::LongPoll;

say "Started Pearl Book Store bot...";
Bot::ChatBots::Telegram::LongPoll->new(
   token     => $ENV{PEARL},
   processor => \&process_record,
   start     => 1,
);
 
sub process_record {
   my $record = shift;
   save_record($record);
 
   my $type    = $record->{data_type};
   my $payload = $record->{payload};

   if ($type eq 'Message' && exists($payload->{from}) ) {

      my $text      = $payload->{text} || '';
      my $peer_name = $payload->{from}{first_name} || 'U. N. Known';

      say "<- $peer_name: $text";
      my $reply = "";

      if ($text eq "/start" or $text =~ m{/?help}i ) {
         $reply = "Very simple... just send:\n".
                  "1. /hello". "\n" .
                  "2. /material" . "\n" . 
                  "or just type in something";
         $record->{send_response} = $reply;
      } # will give wrong response with the advance regex
      elsif ($text eq "/hello" or $text =~ /hello/i ) {
         $reply = "Hello, $peer_name" . "\n" . "Welcome to Pearl Book Store~";
         $record->{send_response} = $reply;
      }
      elsif ( $text =~ /he[yi]+/i ) {
         $reply = "I don't really like your tone. Anyway, how can I help you?";
         $record->{send_response} = $reply;
      }
      elsif ( $text =~ /((pearl)||(you)||(u)) there ?\?/i ) {
        $reply = "Pearl's here~" . "\n" . "Can I help you?";
        $record->{send_response} = $reply;
      }
      elsif ( $text eq "/material" ) {
        $reply = "I'm made of nacre :)";
        $record->{send_response} = $reply;
      }
      elsif ( $text =~ /nacre/i ) {
        $reply = "That's the shiny substance I'm made of";
        $record->{send_response} = $reply;
      }
      elsif ( $text eq ":)" ) {
        $reply = "Yes? ".$text;
        $record->{send_response} = $reply;
      }
      else {
        $reply = "???";
        $record->{send_response} = $reply;
      }
      say "-> $reply";
      say "";
   }
 
   return $record;
}

sub save_record {
  my $record = shift;
  use Data::Dumper;
  open my $fh, ">", "record_details.bot"
    or die "Oops~ $@\n";
  say {$fh} Dumper($record);
}


# baruch Hashem, this script works!
