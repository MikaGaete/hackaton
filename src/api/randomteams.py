import requests
import random

# API URL
beacon_url = "https://random.uchile.cl/beacon/2.1-beta/pulse"

def get_last_pulse():
  content = requests.get(beacon_url)

  # JSON containing all the pulse data
  pulse = content.json()["pulse"]
  # Random string of 512 bits obtained from the pulse
  seed = pulse["outputValue"]

  # This index will be used by the observer to verify the process
  pulse_index = pulse["pulseIndex"]

  return pulse_index, seed

def get_seed_by_pid(pulse_id):
  content = requests.get(beacon_url + '?chainId=2&pulseId=' + str(pulse_id))

  print(content.json())

  # JSON containing all the pulse data
  pulse = content.json()["pulse"]
  
  # Random string of 512 bits obtained from the pulse
  seed = pulse["outputValue"]
  return seed

def generate_brackets(list_teams, pulse_index=None):
    print(list_teams)
    shuffle_teams = list_teams

    if(pulse_index == None):
        # Get the last pulse from the beacon
        pulse_index, seed = get_last_pulse()
    else:
        seed = get_seed_by_pid(pulse_index)

    # Set the seed for the random
    random.seed(seed)

    # Shuffle the list of teams to generate the brackets
    random.shuffle(shuffle_teams)

    # Return the shuffled list of teams and the pulse index
    return shuffle_teams, pulse_index

def verify(t, p):
    # Generate the brackets
    to_verify_output, pulse_index = generate_brackets(t, p)
    
    # Check if the initial teams are the same as the output
    if t == to_verify_output:
        return "The process was truly random"
    else: # If the initial teams are not the same as the output
        return "The process was not truly random"